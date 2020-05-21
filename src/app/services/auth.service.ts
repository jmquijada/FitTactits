import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { FireDbService } from './fire-db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  password = '';
  authUser = null;

  constructor(public auth: AngularFireAuth,
    private router: Router,
    private fbService: FireDbService) {
  }

  // Comprueba el estado del usuario autentificado
  user = this.auth.authState.pipe(
    map(authState => {
      console.log('authState: ', authState);

      if (authState) {
        this.authUser = authState;
        return authState;
      } else {
        return null;
      }
    })
  );

  // Funcion para registrar a un usuario de Email y Password
  registroEmailPass() {
    const firebase = require('firebase');
    return firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      (user) => {
        console.log(user);

        if (user.additionalUserInfo.isNewUser) {
          this.fbService.setUserDB(user.user);
        } else {
          this.fbService.updateUserDB(user.user);
        }

        this.email = '';
        this.password = '';
      }
    );
  }
  // Función para Login de usuario con Email y Contraseña
  login() {
    return this.auth.signInWithEmailAndPassword(this.email, this.password).then(
      user => {
        console.log('user logged Email: ', user);

        // Vacía las variables de los inputs de Email y Contraseña
        this.email = '';
        this.password = '';

        // Asigna el usuario autentificado a la variable atributo
        this.authUser = user.user;

        // En caso de que sea la primera vez del usuario en la app, añade el usuario a la Base de Datos REST
        if (user.additionalUserInfo.isNewUser) {
          this.fbService.setUserDB(user.user);
        } else {
          // En caso de que ya sea cliente de la app, actualiza sus registros
          this.fbService.updateUserDB(user.user);
        }
      }
    );
  }

  // Funcion para Login de usuario con Google
  glogin() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      user => {
        console.log('user logged Google: ', user);
        this.email = '';
        this.password = '';
        this.authUser = user.user;

        // En caso de que sea la primera vez del usuario en la app, añade el usuario a la Base de Datos REST
        if (user.additionalUserInfo.isNewUser) {
          this.fbService.setUserDB(user.user);
        } else {
          // En caso de que ya sea cliente de la app, actualiza sus registros
          this.fbService.updateUserDB(user.user);
        }

        // Redirección a la página principal
        this.router.navigate(['/principal']);
      }
    ).catch(err => console.log('Error login Google: ', err));
  }

  // Función para hacer el Logout del usuario
  logout() {
    this.auth.signOut();
    this.email = '';
    this.password = '';

    // Redirección a la página de inicio
    this.router.navigate(['/inicio']);
  }

  // Borrar User
  borrarUser() {
    const firebase = require('firebase');
    const user = firebase.auth().currentUser;

    user.delete().then(
          () => {
            this.fbService.removeUser(user.uid);
            console.log('Usuario Borrado Con Éxito');
          }
        ).catch(err => console.log(err));

    this.logout();
  }
}
