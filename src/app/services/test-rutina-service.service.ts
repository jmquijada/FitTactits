import { Injectable } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TestRutinaService {

 // Preguntas Test
 preguntas: {
  pregunta: string, respuestas: {
    texto: string,
    fullbody: number,
    weider: number,
    torsoPierna: number,
    tironEmpuje: number,
    tironEmpujePierna: number,
    circuitoHiit: number
  }[]
}[] = [
    {
      pregunta: '¿Dónde sueles o te gustaría hacer deporte?',
      respuestas: [
        {
          texto: 'Al aire libre',
          fullbody: 2,
          weider: 0,
          torsoPierna: 1,
          tironEmpuje: 1,
          tironEmpujePierna: 1,
          circuitoHiit: 1
        },
        {
          texto: 'En el gimnasio',
          fullbody: 1,
          weider: 2,
          torsoPierna: 2,
          tironEmpuje: 2,
          tironEmpujePierna: 2,
          circuitoHiit: 0
        },
        {
          texto: 'En casa',
          fullbody: 2,
          weider: 0,
          torsoPierna: 0,
          tironEmpuje: 0,
          tironEmpujePierna: 0,
          circuitoHiit: 1
        },
        {
          texto: 'Es mi primera vez haciendo deporte',
          fullbody: 2,
          weider: 0,
          torsoPierna: 0,
          tironEmpuje: 0,
          tironEmpujePierna: 0,
          circuitoHiit: 0
        }
      ]
    },
    {
      pregunta: '¿Cuántos días a la semana te gustaría dedicarle?',
      respuestas: [
        {
          texto: '2 días',
          fullbody: 2,
          weider: 0,
          torsoPierna: 0,
          tironEmpuje: 0,
          tironEmpujePierna: 0,
          circuitoHiit: 2
        },
        {
          texto: '3 días',
          fullbody: 2,
          weider: 0,
          torsoPierna: 0,
          tironEmpuje: 0,
          tironEmpujePierna: 1,
          circuitoHiit: 2
        },
        {
          texto: '4 días',
          fullbody: 0,
          weider: 0,
          torsoPierna: 2,
          tironEmpuje: 2,
          tironEmpujePierna: 0,
          circuitoHiit: 0
        },
        {
          texto: '5 días',
          fullbody: 0,
          weider: 2,
          torsoPierna: 1,
          tironEmpuje: 1,
          tironEmpujePierna: 2,
          circuitoHiit: 1
        },
        {
          texto: '6 días',
          fullbody: 0,
          weider: 2,
          torsoPierna: 0,
          tironEmpuje: 0,
          tironEmpujePierna: 2,
          circuitoHiit: 0
        }
      ]
    },
    {
      pregunta: '¿Dispones de material para hacer ejercicio?',
      respuestas: [
        {
          texto: 'No tengo nada',
          fullbody: 1,
          weider: 0,
          torsoPierna: 0,
          tironEmpuje: 0,
          tironEmpujePierna: 0,
          circuitoHiit: 2
        },
        {
          texto: 'Una comba y poco más',
          fullbody: 1,
          weider: 0,
          torsoPierna: 0,
          tironEmpuje: 0,
          tironEmpujePierna: 0,
          circuitoHiit: 2
        },
        {
          texto: 'Un par de mancuernas y alguna que otra cosa',
          fullbody: 1,
          weider: 2,
          torsoPierna: 2,
          tironEmpuje: 2,
          tironEmpujePierna: 2,
          circuitoHiit: 0
        },
        {
          texto: 'Voy al gimnasio. Allí tengo de todo',
          fullbody: 0,
          weider: 2,
          torsoPierna: 0,
          tironEmpuje: 1,
          tironEmpujePierna: 2,
          circuitoHiit: 0
        }
      ]
    },
    {
      pregunta: '¿Cuáles son tus objetivos?',
      respuestas: [
        {
          texto: 'Perder grasa',
          fullbody: 1,
          weider: 0,
          torsoPierna: 0,
          tironEmpuje: 0,
          tironEmpujePierna: 0,
          circuitoHiit: 2
        },
        {
          texto: 'Aumentar masa muscular',
          fullbody: 1,
          weider: 2,
          torsoPierna: 2,
          tironEmpuje: 2,
          tironEmpujePierna: 2,
          circuitoHiit: 0
        },
        {
          texto: 'Ganar Fuerza',
          fullbody: 2,
          weider: 1,
          torsoPierna: 2,
          tironEmpuje: 2,
          tironEmpujePierna: 2,
          circuitoHiit: 0
        },
        {
          texto: 'Estar saludable',
          fullbody: 1,
          weider: 1,
          torsoPierna: 1,
          tironEmpuje: 1,
          tironEmpujePierna: 1,
          circuitoHiit: 1
        }
      ]
    }

  ];
  // FIN PREGUNTAS TEST

  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  // Muestra el resultado y cierra Test
  async mostrarResultado(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Test Terminado',
      backdropDismiss: false,
      message: msg,
      buttons: [
        {
          text: 'Cerrar',
          handler: () => {
            this.modalCtrl.dismiss();
          }
        }
      ]
    });

    await alert.present();
  }

  // Error para cuando el usuario no seleccione una respuesta
  async errorRespuestaVacia() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'Debes seleccionar una opción',
      buttons: ['OK']
    });

    await alert.present();
  }

  // Generar texto test para el AlertController
  generarTextoTest(fb: number, tp: number, wd: number, te: number, tep: number, chiit: number, maximo: number) {
    let texto;

    switch (true) {
      case fb === maximo:
        texto = 'El tipo de rutina perfecta para tí es Full-Body';
        break;
      case tp === maximo:
        texto = 'El tipo de rutina perfecta para tí es Torso Pierna';
        break;
      case wd === maximo:
        texto = 'El tipo de rutina perfecta para tí es Weider';
        break;
      case te === maximo:
        texto = 'El tipo de rutina perfecta para tí es Tiron Empuje';
        break;
      case tep === maximo:
        texto = 'El tipo de rutina perfecta para tí es Tirón Empuje Pierna';
        break;
      case chiit === maximo:
        texto = 'El tipo de rutina perfecta para tí es un circuito HIIT';
        break;
    }
    return texto;
  }
}
