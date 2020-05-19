import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CrearRutinaService } from 'src/app/services/crear-rutina.service';
import { IRutina } from 'src/app/interfaces/interfaces';
import { PopoverController, AlertController } from '@ionic/angular';
import { PopEjerciciosComponent } from '../pop-ejercicios/pop-ejercicios.component';

@Component({
  selector: 'app-crear-rutina-completo',
  templateUrl: './crear-rutina-completo.component.html',
  styleUrls: ['./crear-rutina-completo.component.scss'],
})
export class CrearRutinaCompletoComponent implements OnInit {

  @Input() rutinas: IRutina[];
  @ViewChild('nombreRutina', { static: false }) nombreRutina;
  @ViewChild('tipo', { static: false }) tipo;
  @ViewChild('sistema', { static: false }) sistemaRutina;
  @ViewChild('objetivo', { static: false }) objetivo;
  @ViewChild('numDias', { static: false }) numDias;

  constructor(public crService: CrearRutinaService,
    private popController: PopoverController,
    private alertCtrl: AlertController) { }

  ngOnInit() { }

  // Funciones para cambio de datos formulario

  setNombreRutina(event) {
    this.crService.rutina.nombre = event.detail.value;
  }

  setTipoRutina(event) {
    if (event.detail.value === 'Circuito') {
      this.crService.alertCircuito();
    } else {
      delete this.crService.seriesCircuito;
      delete this.crService.descansoCircuito;
      this.crService.resetDatos();
    }

    this.crService.rutina.tipo = event.detail.value;
    this.crService.rutina.sistema = '';
    this.sistemaRutina.value = '';
  }

  setSistemaRutina(event) {
    this.crService.rutina.sistema = event.detail.value;
  }

  setObjetivo(event) {
    this.crService.rutina.objetivo = event.detail.value;
  }

  setNumDias(event) {
    this.crService.rutina.numDias = event.detail.value;
  }

  resetForm() {
    this.nombreRutina.value = this.crService.rutina.nombre;
    this.tipo.value = this.crService.rutina.tipo;
    this.sistemaRutina.value = this.crService.rutina.sistema;
    this.objetivo.value = this.crService.rutina.objetivo;
    this.numDias.value = this.crService.rutina.numDias;
  }

  // Modo Completo: Añadir ejercicios
  async buscarEjercicios(idDia) {
    const popover = await this.popController.create({
      component: PopEjerciciosComponent,
      mode: 'ios',
      componentProps: {
        posD: idDia,
        onClick: () => {
          this.popController.dismiss();
        }
      }
    });
    return await popover.present();
  }

}
