import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CrearRutinaService } from '../../services/crear-rutina.service';
import { IRutina } from '../../interfaces/interfaces';

@Component({
  selector: 'app-crear-rutina-simple',
  templateUrl: './crear-rutina-simple.component.html',
  styleUrls: ['./crear-rutina-simple.component.scss'],
})
export class CrearRutinaSimpleComponent implements OnInit {

  @Input() rutinas: IRutina[];
  @ViewChild('nombreRutina', { static: false }) nombreRutina;
  @ViewChild('tipo', { static: false }) tipo;
  @ViewChild('sistema', { static: false }) sistemaRutina;
  @ViewChild('objetivo', { static: false }) objetivo;
  @ViewChild('numDias', { static: false }) numDias;

  constructor(public crService: CrearRutinaService) { }

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
}
