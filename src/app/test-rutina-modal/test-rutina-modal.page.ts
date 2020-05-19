import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';
import { TestRutinaService } from '../services/test-rutina-service.service';

@Component({
  selector: 'app-test-rutina-modal',
  templateUrl: './test-rutina-modal.page.html',
  styleUrls: ['./test-rutina-modal.page.scss'],
})
export class TestRutinaModalPage implements OnInit {

  @ViewChild(IonRadioGroup, { static: false }) radioGroup;

  indexPregunta = 0;

  opcionesSeleccionadas: {
    texto: string,
    fullbody: number,
    weider: number,
    torsoPierna: number,
    tironEmpuje: number,
    tironEmpujePierna: number,
    circuitoHiit: number
  }[] = Array(this.testService.preguntas.length);

  terminarTest = false;

  constructor(public testService: TestRutinaService) { }

  ngOnInit() {
  }

  setRespuesta(indice: number) {
    this.opcionesSeleccionadas[this.indexPregunta] = this.testService.preguntas[this.indexPregunta].respuestas[indice];
  }

  siguientePregunta() {
    if (this.indexPregunta !== this.testService.preguntas.length - 1 && !this.terminarTest && this.radioGroup.value !== undefined) {
      this.setRespuesta(this.radioGroup.value);
      this.indexPregunta++;
      if (this.indexPregunta === this.testService.preguntas.length - 1) {
        this.terminarTest = true;
      }
    } else {
      this.testService.errorRespuestaVacia();
    }
    this.radioGroup.value = undefined;
  }

  evaluarTest() {
    let textoRespuesta: string;

    if (this.radioGroup.value === undefined) {
      this.testService.errorRespuestaVacia();
      return;
    } else {
      this.setRespuesta(this.radioGroup.value);
    }

    let fullbody = 0,
      torsoPierna = 0,
      weider = 0,
      tironEmpuje = 0,
      tironEmpujePierna = 0,
      circuitoHiit = 0,
      maximo = 0;

    for (let opcion of this.opcionesSeleccionadas) {
      fullbody += opcion.fullbody;
      torsoPierna += opcion.torsoPierna;
      weider += opcion.weider;
      tironEmpuje += opcion.tironEmpuje;
      tironEmpujePierna += opcion.tironEmpujePierna;
      circuitoHiit += opcion.circuitoHiit;
    }

    maximo = Math.max(fullbody, torsoPierna, weider, tironEmpuje, tironEmpujePierna, circuitoHiit);
    textoRespuesta = this.testService.generarTextoTest(fullbody, torsoPierna, weider, tironEmpuje, tironEmpujePierna, circuitoHiit, maximo);
    this.testService.mostrarResultado(textoRespuesta);
  }

}
