import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonButton } from '@ionic/angular'; 
import { IDias } from 'src/app/interfaces/interfaces'; 
import { RutinaService } from 'src/app/services/rutina.service';


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
