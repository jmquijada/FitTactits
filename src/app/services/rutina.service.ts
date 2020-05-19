import { Injectable } from '@angular/core';
import { AlertController, ToastController, IonButton, ModalController } from '@ionic/angular';
import { IDias } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  ejercicio = 0;
  serie = 1;
  finalizarRutina = false;
  minutos = 0;
  segundos = 0;

  timeoutId;
  idInterval;

  constructor(private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController) { }

  // Cerrar Rutina de Forma Bruta
  cerrarRutina() {
    clearTimeout(this.timeoutId);
    clearInterval(this.idInterval);
    this.modalCtrl.dismiss();
  }

  // Función para cambiar de ejercicio en caso de que el tipo de rutina sea 'Clásico'
  cambiarEjercicio(diaObjeto: IDias, siguienteEjercicio: IonButton) {

    // En el caso de que no haya más entrenamiento
    if (!this.checkFinalizado(diaObjeto)) {
      // Inicia el temporizador
      this.setDescanso(diaObjeto.ejercicios[this.ejercicio].descanso);
      this.alertDescanso();

      // Desactiva el botón de continuar
      siguienteEjercicio.disabled = true;

      // Inicia el temporizador casi a la misma vez que el descanso. Cuando termine, aumenta serie/ejercicio
      this.timeoutId = setTimeout(() => {
        siguienteEjercicio.disabled = false;
        this.serie++;
        this.alertContinua();
        if ((this.serie > diaObjeto.ejercicios[this.ejercicio].series) && this.finalizarRutina === false) {
          this.ejercicio++;
          this.serie = 1;

          if (this.ejercicio === diaObjeto.ejercicios.length) {
            this.ejercicio--;
            this.finalizarRutina = true;
          }
        }

      }, (diaObjeto.ejercicios[this.ejercicio].descanso * 1000));
    } else {// En caso de que no haya más ejercicios para hacer, alert para irse a casa
      this.finalizarRutina = true;
      this.alertContinua('Has terminado!', 'Es hora de irse a casa');
    }
  }

  // Función para cambiar de ejercicio en caso de que el tipo de rutina sea 'Circuito'
  cambiarEjercicioCircuito(diaObjeto: IDias, siguienteEjercicio: IonButton) {
    if (diaObjeto.ejercicios[(this.ejercicio + 1)]) {
      this.ejercicio++;
    } else {
      if (!this.checkFinalizadoC(diaObjeto)) {
        // Inicia el temporizador
        this.setDescanso(diaObjeto.ejercicios[this.ejercicio].descanso);
        this.alertDescanso();

        // Desactiva el botón de continuar
        siguienteEjercicio.disabled = true;

        // Inicia el temporizador casi a la misma vez que el descanso. Cuando termine, aumenta serie/ejercicio
        setTimeout(() => {
          siguienteEjercicio.disabled = false;
          this.serie++;
          this.alertContinua();
          this.ejercicio = 0;

          if ((this.serie > diaObjeto.ejercicios[this.ejercicio].series) && this.finalizarRutina === false) {
            this.ejercicio++;
            this.serie = 1;

            if (this.ejercicio === diaObjeto.ejercicios.length) {
              this.ejercicio--;
              this.finalizarRutina = true;
            }
          }

        }, (diaObjeto.ejercicios[this.ejercicio].descanso * 1000));
      } else {
        this.finalizarRutina = true;
        this.alertContinua('Has terminado!', 'Es hora de ducharse');
      }
    }
  }

  // Funcion para iniciar el temporizador
  setDescanso(tiempoDesc) {
    this.minutos = Math.floor(tiempoDesc / 60);
    this.segundos = tiempoDesc % 60;

    this.idInterval = setInterval(() => {
      if (this.segundos === 0) {
        if (this.minutos !== 0) {
          this.minutos--;
          this.segundos = 60;
        } else {
          clearInterval(this.idInterval);
        }
      } else {
        this.segundos--;
      }
    }, 1000);
  }

  async alertDescanso() {
    const alert = await this.alertCtrl.create({
      header: 'Descanso!',
      backdropDismiss: false,
      subHeader: 'Bebe agua y guarda energía para la siguiente serie',
      message: 'Espera a que pase el tiempo para continuar',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertContinua(header = 'Descanso Finalizado', msg = 'Es el momento de darle fuerte a los hierros') {
    const alert = await this.alertCtrl.create({
      header,
      backdropDismiss: false,
      subHeader: msg,
      message: 'Pulse "OK" para continuar',
      buttons: ['OK']
    });

    await alert.present();
  }

  checkFinalizado(diaObjeto: IDias): boolean {
    let serieAux = this.serie;
    let ejercicioAux = this.ejercicio;

    serieAux++;

    if ((serieAux > diaObjeto.ejercicios[ejercicioAux].series) && this.finalizarRutina === false) {
      ejercicioAux++;
      serieAux = 1;

      if (ejercicioAux === diaObjeto.ejercicios.length) {
        ejercicioAux--;
        return true;
      }
    }
    return false;
  }

  checkFinalizadoC(diaObjeto: IDias): boolean {
    let serieAux = this.serie;
    let ejercicioAux = this.ejercicio;

    serieAux++;

    if ((serieAux > diaObjeto.ejercicios[ejercicioAux].series) && this.finalizarRutina === false) {
      if ((ejercicioAux + 1) === diaObjeto.ejercicios.length) {
        return true;
      }
    }
    return false;
  }

  // Toast para cuando pulse el botón de finalizar ejercicio
  async toastFinRutina() {
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message: 'Rutina de ejercicios finalizada con éxito!',
      duration: 2000
    });
    toast.present();
  }
}
