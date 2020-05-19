import { Injectable } from '@angular/core';
import { IRutina, IDias, IEjercicio } from '../interfaces/interfaces';
import { AlertController, PopoverController } from '@ionic/angular';
import { FireDbService } from './fire-db.service';

@Injectable({
  providedIn: 'root'
})
export class CrearRutinaService {

  // Variables relacionadas con el creador de rutinas
  // Variable que guarda la rutina
  rutina: IRutina = {
    nombre: '',
    tipo: 'Clasico',
    sistema: '',
    objetivo: '',
    material: false,
    numDias: 1,
    dias: []
  };

  // Variable que guarda los dias de rutina y ejercicios
  diasArray: IDias[] = [
    {
      nombre: 'Dia 1',
      ejercicios: []
    },
    {
      nombre: 'Dia 2',
      ejercicios: []
    },
    {
      nombre: 'Dia 3',
      ejercicios: []
    },
    {
      nombre: 'Dia 4',
      ejercicios: []
    },
    {
      nombre: 'Dia 5',
      ejercicios: []
    },
    {
      nombre: 'Dia 6',
      ejercicios: []
    },
    {
      nombre: 'Dia 7',
      ejercicios: []
    }
  ];

  seriesCircuito;
  descansoCircuito;

  constructor(private alertCtrl: AlertController, private fireService: FireDbService) { }

  // Alert para coger el valor de vueltas y descanso en el caso de que el usuario seleccione 'Circuito' como tipo de rutina
  async alertCircuito() {
    const alert = await this.alertCtrl.create({
      header: 'Modo Circuito',
      subHeader: 'Introduce el tiempo de descanso por cada vuelta y el nº de vueltas',
      inputs: [
        {
          name: 'vueltas',
          type: 'text',
          placeholder: 'Nº de vueltas'
        },
        {
          name: 'descanso',
          type: 'text',
          placeholder: 'Descanso (seg)...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.seriesCircuito = data.vueltas;
            this.descansoCircuito = data.descanso;
          }
        }
      ]
    });

    await alert.present();
  }
  // Modo Simple: IonAlert para añadir ejercicios
  async addEjercicio(posDia, nombre?, series?, reps?, rest?) {
    if (this.seriesCircuito) {
      series = this.seriesCircuito;
    }
    if (this.descansoCircuito) {
      rest = this.descansoCircuito;
    }
    const alert = await this.alertCtrl.create({
      header: 'Nuevo Ejercicio (Día ' + (posDia + 1) + ')',
      inputs: [
        {
          name: 'nombreEjercicio',
          type: 'text',
          placeholder: 'Nombre del ejercicio...',
          value: nombre
        },
        {
          name: 'series',
          type: 'number',
          placeholder: 'Series...',
          min: 1,
          max: 100,
          value: series
        },
        {
          name: 'repeticiones',
          type: 'number',
          placeholder: 'Repeticiones...',
          min: 1,
          max: 100,
          value: reps
        },
        {
          name: 'descanso',
          type: 'number',
          placeholder: 'Descanso...',
          min: 1,
          max: 6000,
          value: rest
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            let ejercicio: IEjercicio;
            if (this.rutina.tipo === 'Clasico') {
              ejercicio = {
                nombre: data.nombreEjercicio,
                imagen: '/assets/images/logo.png',
                series: data.series,
                repeticiones: data.repeticiones,
                descanso: data.descanso
              };
            } else {
              ejercicio = {
                nombre: data.nombreEjercicio,
                imagen: '/assets/images/logo.png',
                series: this.seriesCircuito,
                repeticiones: data.repeticiones,
                descanso: this.descansoCircuito
              };
            }


            const boolErrores = this.handlerCrearEjercicio(ejercicio, posDia);

            if (boolErrores) {
              this.diasArray[posDia].ejercicios.push(ejercicio);
            }

            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


  // Manejador para comprobar que no se deje ningún campo vacío
  handlerCrearEjercicio(ejercicio: IEjercicio, posD, actionCompleto = null): boolean {
    if (ejercicio.nombre.length === 0 || ejercicio.series.toString().length === 0
      || ejercicio.repeticiones.toString().length === 0 || ejercicio.descanso.toString().length === 0) {
      this.alertCtrl.dismiss();

      if (actionCompleto !== null) {
        this.alertMsg('Error', 'Algunos campos del formulario están vacíos');
        // tslint:disable-next-line: no-unused-expression
        actionCompleto;
        return false;
      }

      this.alertMsg('Error', 'Algunos campos del formulario están vacíos',
        this.addEjercicio(posD, ejercicio.nombre, ejercicio.series, ejercicio.repeticiones, ejercicio.descanso));

      return false;
    }
    return true;
  }

  // Funcion para comprobar la necesidad de equipamiento en la rutina
  checkEquipamiento(rutina: IRutina): boolean {
    for (let dia of rutina.dias) {
      for (let ejercicio of dia.ejercicios) {
        if (ejercicio.equipamiento) {
          return true;
        }
      }
    }
    return false;
  }
  // Borrar ejercicio del día seleccionado
  delEjercicio(posDia, posEjercicio) {
    this.diasArray[posDia].ejercicios.splice(posEjercicio, 1);
  }

  // Funcion para asignar la variable atributo 'diasArray' como valor al atributo 'dias' de la variable-objeto 'rutina'
  prepararObjetoRutina(id: number, rutinas: IRutina[]) {
    this.rutina.dias = this.diasArray.slice(0, this.rutina.numDias);
    this.rutina.material = this.checkEquipamiento(this.rutina);
    if (this.checkErrores(rutinas)) {
      return;
    }

    console.log(this.rutina);
    this.fireService.setRutinaCreada(this.rutina, id);
    this.alertMsg('Información', 'Rutina creada con éxito', this.resetDatos());

  }

  // Funcion que comprueba si hay errores en el formulario y retorna un booleano (en caso de que haya errores: true)
  checkErrores(rutinas: IRutina[]): boolean {

    if (this.rutina.nombre === '' || this.rutina.sistema === ''
      || this.rutina.objetivo === '') {
      this.alertMsg('Error', 'Hay campos del formulario que están vacíos');
      return true;
    }

    for (let rutina of rutinas) {
      if (rutina.nombre.toLowerCase() === this.rutina.nombre.toLowerCase()) {
        this.alertMsg('Error', 'Ya existe una rutina con ese nombre');
        return true;
      }
    }
    for (let dia of this.rutina.dias) {
      if (dia.ejercicios.length === 0) {
        this.alertMsg('Error', 'Hay días que no contienen ejercicios');
        return true;
      }
    }
    return false;
  }

  // IonAlert para mostrar mensajes
  async alertMsg(header, msg: string, action = null) {
    const alert = await this.alertCtrl.create({
      header,
      cssClass: '',
      message: msg,
      buttons: [{
        text: 'Ok',
        handler: () => {
          if (action !== null) {
            action;
          }
        }
      }]
    });

    await alert.present();
  }

  resetDatos() {
    this.rutina = {
      nombre: '',
      tipo: 'Clasico',
      sistema: '',
      objetivo: '',
      material: false,
      numDias: 1,
      dias: []
    };
    this.diasArray = [
      {
        nombre: 'Dia 1',
        ejercicios: []
      },
      {
        nombre: 'Dia 2',
        ejercicios: []
      },
      {
        nombre: 'Dia 3',
        ejercicios: []
      },
      {
        nombre: 'Dia 4',
        ejercicios: []
      },
      {
        nombre: 'Dia 5',
        ejercicios: []
      },
      {
        nombre: 'Dia 6',
        ejercicios: []
      },
      {
        nombre: 'Dia 7',
        ejercicios: []
      }
    ];
  }
}
