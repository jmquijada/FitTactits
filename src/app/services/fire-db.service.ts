import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(private db: AngularFireDatabase) { }

  // Funciones Default CursoOW
  updateUserData(user: any) {
    console.log('user: ', user);
    const path = 'users/'+ user.uid;
    const u = {
      email: user.email
    };

    this.db.object(path).update(u)
    .catch( err => console.log(err));
  }

  getUsers() {
    const path = 'users/';
    // return this.db.list(path).valueChanges();
    return this.db.list(path).snapshotChanges();
  }

  removeUser(userUid) {
    const path = 'users/' + userUid;
    return this.db.object(path).remove();
  }

  // Funcion para Obtener Todos los Ejercicios
  getEjercicios() {
    const path = 'ejercicios/';

    return this.db.list(path).snapshotChanges();
  }

  // Función para Crear Rutina (falta modificar por usuario)
  setRutinaCreada(rutina, id) {
    const path = 'rutinasCreadas/' + id;

    this.db.object(path).set(rutina);
  }

  // Funcion para obtener rutinas creadas (falta modificar por usuario)
  getRutinasCreadas() {
    const path = 'rutinasCreadas/';

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
}
