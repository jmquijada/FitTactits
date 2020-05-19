import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RutinaService } from '../services/rutina.service';
import { IDias } from '../interfaces/interfaces';
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'app-visualizar-rutina',
  templateUrl: 'visualizar-rutina.page.html',
  styleUrls: ['visualizar-rutina.page.scss'],
})
export class VisualizarRutinaPage implements OnInit {

  @ViewChild('nextEjercicio', { static: false }) siguienteEjercicio: IonButton;
  @Input() nombreRutina: string;
  @Input() diaObjeto: IDias;
  @Input() tipoRutina;

  boolCircuito;
  widthImagen = 300;
  
  constructor(public rService: RutinaService) { }

  ngOnInit() {
    console.log(this.tipoRutina);
    if (this.tipoRutina === 'Clasico') {
      this.boolCircuito = false;
    } else {
      this.boolCircuito = true;
    }
  }
}
