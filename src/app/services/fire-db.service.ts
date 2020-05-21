import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  usuarioActual: any;

  constructor(private db: AngularFireDatabase) { }

  // Función para añadir usuario nuevo a la base de datos
  setUserDB(user: any) {
    const path = 'users/' + user.uid;

    const historialPas: any = [
      {
      fecha: (new Date()).toLocaleDateString(),
      anio: (new Date()).toLocaleDateString().split('/')[2],
      mes: (new Date()).toLocaleDateString().split('/')[1],
      dia: (new Date()).toLocaleDateString().split('/')[0],
      pasos: 0
    }
  ];

    const u: any = {
      nick: user.email.split('@')[0],
      email: user.email,
      pasos: 0,
      historialPasos: historialPas,
      rutinasCreadas: 0,
      nivel: 1,
      experiencia: 0
    };

    this.db.object(path).update(u)
      .catch(err => console.log('Error al actualizar el usuario nuevo: ', err));
  }

  // Función para controlar el historial de pasos del usuario existente en Firebase
  updateUserDB(user) {
    const path = 'users/' + user.uid;

    // Cogemos primero los datos del usuario de la Base de datos
    this.getUser(user.uid).subscribe(
      snap => {
        const u = snap.payload.exportVal();
        this.prepararObjeto(user.uid, u);
      }
    );
  }

  // Función para preparar el objeto usuario al actualizar
  prepararObjeto(uid, userData: any) {
    const path = 'users/' + uid;

    const fechaActual = new Date();
    let arrayHistorial = Object.values(userData.historialPasos);

    // Variable que guarda el objeto de la última fecha de inicio de sesión
    let fechaUltimaObj: any = arrayHistorial[(arrayHistorial.length - 1)];
    // Variable que guarda la fecha última de inicio de sesión

    // Nota: la fecha la coge como si de un array se tratase en posiciones [0,1,2....]
    const fechaUltima = new Date(fechaUltimaObj.anio, (fechaUltimaObj.mes - 1), fechaUltimaObj.dia);

    // En caso de que la fecha actual sea más reciente que la última fecha de inicio de sesión
    if (fechaActual.getFullYear() > fechaUltima.getFullYear()
        || fechaActual.getUTCMonth() > fechaUltima.getUTCMonth()
        || fechaActual.getDate() > fechaUltima.getDate()) {

      /*
        Se añaden los pasos del anterior día a su día del historial correspondiente
        y al historial en el usuario actual para su modificacion posterior
      */

      fechaUltimaObj.pasos = userData.pasos;
      arrayHistorial[(arrayHistorial.length - 1)] = fechaUltimaObj;

      // Se resetean los pasos del usuario
      userData.pasos = 0;

      // Se añade una nueva posición al historial con la fecha actual
      arrayHistorial.push({
        fecha: fechaActual.toLocaleDateString(),
        anio: fechaActual.toLocaleDateString().split('/')[2],
        mes: fechaActual.toLocaleDateString().split('/')[1],
        dia: fechaActual.toLocaleDateString().split('/')[0],
        pasos: 0
      });

      userData.historialPasos = arrayHistorial;

      this.db.database.ref(path).set(userData).catch(err => console.log('DB REF ERR', err));
    }
  }

  // Obtener un usuario de ID 'x'
  getUser(uid) {
    const path = `users/${uid}`;

    return this.db.object(path).snapshotChanges();
  }


  // Obtener todos los usuarios
  getUsers() {
    const path = 'users/';
    // return this.db.list(path).valueChanges();
    return this.db.list(path).snapshotChanges();
  }

  // Borrar Usuario de la base de datos
  removeUser(userUid) {
    const path = 'users/' + userUid;
    return this.db.object(path).remove();
  }

  // Funcion para Obtener Todos los Ejercicios
  getEjercicios() {
    console.log(this.usuarioActual);
    const path = 'ejercicios/';

    return this.db.list(path).snapshotChanges();
  }

  // Función para Crear Rutina (falta modificar por usuario)
  setRutinaCreada(uid, rutina, id) {
    const path = `users/${uid}/rutinasCreadas/${id}`;

    this.db.object(path).set(rutina);
  }

  // Funcion para obtener rutinas creadas (falta modificar por usuario)
  getRutinasCreadas(uid) {
    const path = `users/${uid}/rutinasCreadas`;
    return this.db.list(path).snapshotChanges();
  }

  // Funcion para obtener todas las rutinas de la app
  getRutinas() {
    const path = 'rutinas/';

    return this.db.list(path).snapshotChanges();
  }

  // Funcion para obtener todas las rutinas de la app
  getAlimentos() {
    const path = 'alimentos/';

    return this.db.list(path).snapshotChanges();
  }

  setMedidas(uid, objMedidas: any[]) {
    const path = `users/${uid}/medidas`;
    this.db.database.ref(path).set(objMedidas).catch(err => console.log('DB REF ERR', err));
  }

  getMedidas(uid) {
    const path = `users/${uid}/medidas`;

    return this.db.list(path).snapshotChanges();
  }

}