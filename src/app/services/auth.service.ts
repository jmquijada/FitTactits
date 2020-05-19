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
              private fbService: FireDbService) { }

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

  login() {
    console.log('Login!');
    return this.auth.signInWithEmailAndPassword(this.email, this.password).then(
      user => {
        console.log('user logged Email: ', user);
        this.email = '';
        this.password = '';
        this.authUser = user.user;
        this.fbService.updateUserData(user.user);
      }
    )
  }

  glogin() {
    console.log('Google Login!!');
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      user => {
        console.log('user logged Google: ', user);
        this.email = '';
        this.password = '';
        this.authUser = user.user;
        this.fbService.updateUserData(user.user);
        this.router.navigate(['/principal']);
      }
    ).catch(err => console.log('Error login Google: ', err));
  }

  flogin() {
    console.log('Facebook Login!!');
    this.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
      user => {
        console.log('user logged Facebook: ', user);
        this.email = '';
        this.password = '';
        this.authUser = user.user;
        this.fbService.updateUserData(user.user);
      }
    ).catch(err => console.log('Error login Facebook: ', err));
  }

  logout() {
    console.log('Logout!');
    this.auth.signOut();
    this.email = '';
    this.password = '';

    this.router.navigate(['/']);
  }
}
