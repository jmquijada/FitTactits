import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IRutina, IDias } from '../../interfaces/interfaces';
import { FireDbService } from '../../services/fire-db.service';
import { VisualizarRutinaPage } from '../../visualizar-rutina/visualizar-rutina.page';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {

  rutinas: IRutina[] = [];
  rutinasCreadas: IRutina[] = [];

  modoRutinas = 'general';

  constructor(private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private fireService: FireDbService) { }

  ngOnInit() {
    this.fireService.getRutinasCreadas().subscribe(
      (snap) => {
        this.rutinasCreadas = [];
        snap.forEach((r) => {
          const rutina: any = r.payload.val();
          this.rutinasCreadas.push(rutina);
        });
      }
    );

    this.fireService.getRutinas().subscribe(
      (snap) => {
        this.rutinas = [];
        snap.forEach((r) => {
          const rutina: any = r.payload.val();
          this.rutinas.push(rutina);
        });
      }
    );
  }


  // Alert para Seleccionar el Día
  async presentAlertConfirm(idRutina) {
    let botones;
    if (this.modoRutinas === 'general') {
      botones = this.prepararButtons(this.rutinas[idRutina].nombre, idRutina);
    } else {
      botones = this.prepararButtons(this.rutinasCreadas[idRutina].nombre, idRutina);
    }

    const alert = await this.alertCtrl.create({
      header: '¿Qué día te toca?',
      message: 'Seleccione uno',
      buttons: botones
    });

    await alert.present();
  }

  async modalDiaRutina(nombreRutina: string, tipoRutina: string, dia: IDias) {
    const modal = await this.modalCtrl.create({
      component: VisualizarRutinaPage,
      componentProps: {
        nombreRutina,
        diaObjeto: dia,
        tipoRutina
      }
    });
    return await modal.present();
  }

  // Funcion para preparar el array de botones para la seleccion de dias
  prepararButtons(nombreRutina: string, id) {
    // Array de botones, variable auxiliar y variable para coger los dias
    let botones = [];
    let days;
    let tipoRutina;

    if (this.modoRutinas === 'general') {
      days = this.rutinas[id].dias;
      tipoRutina = this.rutinas[id].tipo;
    } else {
      days = this.rutinasCreadas[id].dias;
      tipoRutina = this.rutinasCreadas[id].tipo;
    }

    for (let dia of days) {
      botones.push({
        text: dia.nombre,
        handler: (blah) => {
          this.modalDiaRutina(nombreRutina, tipoRutina, dia);
        }
      });
    }

    return botones;
  }

  cambioRutinas(event) {
    this.modoRutinas = event.detail.value;
  }

  // Funcion para la información de la rutina
  async infoRutina(rutina: IRutina) {
    const infoRutina = '<p>' +
      `Nombre: ${rutina.nombre}` +
      '</p>' +
      '<p>' +
      `Tipo: ${rutina.tipo}` +
      '</p>' +
      '<p>' +
      `Sistema: ${rutina.sistema}` +
      '</p>' +
      '<p>' +
      `Nº de días: ${rutina.numDias}` +
      '</p>' +
      '<p>' +
      `Necesita material: ${(rutina.material) ? 'Sí' : 'No'}` +
      '</p>';
    const alert = await this.alertCtrl.create({
      header: 'Información de Rutina',
      message: infoRutina,
      buttons: ['OK']
    });

    await alert.present();
  }
}
