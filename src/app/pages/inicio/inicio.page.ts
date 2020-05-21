import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController, IonInput } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage implements OnInit {

  @ViewChild('email', {static: false}) email: IonInput;
  @ViewChild('pass', {static: false}) pass: IonInput;
  @ViewChild('rPass', {static: false}) rPass: IonInput;

  opciones = {
    slidesPerView: 1,
    freeMode: false
  };

  repeatPass: string;

  constructor(public fbAuth: AuthService,
    private router: Router,
    private alertCtrl: AlertController) {

  }

  ngOnInit() {
    if (this.fbAuth.authUser) {
      this.router.navigate(['/principal']);
    }
  }

  loginForm() {
    this.fbAuth.login().catch(err => {
      console.log('Error Email login : ', err);

      console.log('error code: ', err.code);
      if (err.code === 'auth/wrong-password') {
        // alert('Contraseña no válida');
        this.alertMsg('Error login', 'Contraseña no válida');
      } else if (err.code === 'auth/invalid-email') {
        this.alertMsg('Error login', 'Email no válido');
      } else if (err.code === 'auth/user-not-found') {
        this.alertMsg('Error login', 'Usuario');
      }
    });

  }

  registerForm() {
    if (this.fbAuth.password !== this.repeatPass) {
      this.alertMsg('Error registro', 'La contraseñas deben ser iguales en ambos campos.');
      return;
    }

    this.fbAuth.registroEmailPass().then(() => {this.resetForm();}).catch(
      (err) => {
        console.log('Error registro Email', err);
        if(err.code === 'auth/email-already-in-use"'){
          this.alertMsg('Error registro', 'Ya existe un registro con ese email');
        } else if (err.code === 'auth/invalid-email') {
          this.alertMsg('Error registro', 'Email no válido');
        } else if (err.code === 'auth/weak-password') {
          this.alertMsg('Error registro', 'La contraseña debe de tener 6 carácteres o más.');
        }
      }
    );

    this.repeatPass = '';
  }

  // Funcion para resetear los campos del formulario
  resetForm() {
    this.email.value = '';
    this.pass.value = '';
    this.rPass.value = '';
  }
  // Función para enviar mensajes de información
  async alertMsg(header: string, message: string, manejador = null) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Vale',
          handler: () => {
            if (manejador !== null) {
              manejador();
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
