import { Component, OnInit, Input } from '@angular/core';
import { FireDbService } from '../../services/fire-db.service';
import { IEjercicio } from '../../interfaces/interfaces';
import { CrearRutinaService } from '../../services/crear-rutina.service';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-ejercicios',
  templateUrl: './pop-ejercicios.component.html',
  styleUrls: ['./pop-ejercicios.component.scss'],
})
export class PopEjerciciosComponent implements OnInit {

  @Input() posD;
  @Input() onClick;
  ejercicios: IEjercicio[] = [];
  valorBuscador = '';

  constructor(private serviceData: FireDbService,
    private crService: CrearRutinaService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.serviceData.getEjercicios().subscribe(
      (snap) => {
        this.ejercicios = [];
        snap.forEach((e) => {
          const ejercicio: any = e.payload.val();
          this.ejercicios.push(ejercicio);
        });
      }
    );
  }

  // Fin funciones para cambio de datos formulario
  async addEjercicioC(posDia, ejercicioObj?: IEjercicio, nombre?, series?, reps?, rest?) {
    if (this.crService.seriesCircuito) {
      ejercicioObj.series = this.crService.seriesCircuito;
    }
    if (this.crService.descansoCircuito) {
      ejercicioObj.descanso = this.crService.descansoCircuito;
    }
    const alert = await this.alertCtrl.create({
      header: 'Nuevo Ejercicio (Día ' + (posDia + 1) + ')',
      inputs: [
        {
          name: 'nombreEjercicio',
          type: 'text',
          placeholder: 'Nombre del ejercicio...',
          value: ejercicioObj.nombre
        },
        {
          name: 'series',
          type: 'number',
          placeholder: 'Series...',
          min: 1,
          max: 30,
          value: ejercicioObj.series
        },
        {
          name: 'repeticiones',
          type: 'number',
          placeholder: 'Repeticiones...',
          min: 1,
          max: 50,
          value: ejercicioObj.repeticiones
        },
        {
          name: 'descanso',
          type: 'number',
          placeholder: 'Descanso...',
          min: 1,
          max: 6000,
          value: ejercicioObj.descanso
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.onClick();
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if (this.crService.rutina.tipo === 'Clasico') {
              ejercicioObj.series = data.series;
              ejercicioObj.repeticiones = data.repeticiones;
              ejercicioObj.descanso = data.descanso;
            } else {
              ejercicioObj.series = this.crService.seriesCircuito;
              ejercicioObj.repeticiones = data.repeticiones;
              ejercicioObj.descanso = this.crService.descansoCircuito;
            }


            const boolErrores = this.handlerCrearEjercicio(ejercicioObj, posDia);

            console.log(boolErrores);
            if (boolErrores) {
              this.alertCtrl.dismiss();
              this.crService.diasArray[posDia].ejercicios.push(ejercicioObj);
              this.onClick();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  handlerCrearEjercicio(ejercicio: IEjercicio, posD): boolean {
    if (ejercicio.nombre.length === 0 || ejercicio.series.toString().length === 0
      || ejercicio.repeticiones.toString().length === 0 || ejercicio.descanso.toString().length === 0) {
      this.alertCtrl.dismiss();
      this.crService.alertMsg('Error', 'Algunos campos del formulario están vacíos',
        this.addEjercicioC(posD, ejercicio, ejercicio.series, ejercicio.repeticiones, ejercicio.descanso));

      return false;
    }
    return true;
  }
}
