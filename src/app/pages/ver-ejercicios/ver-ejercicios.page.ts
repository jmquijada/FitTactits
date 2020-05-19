import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { FireDbService } from 'src/app/services/fire-db.service';
import { FiltroEjerciciosPipe } from 'src/app/pipes/filtro-ejercicios.pipe';
import { EquipamientoPipe } from 'src/app/pipes/equipamiento-pipe.pipe';
import { VerEjercicioComponent } from 'src/app/components/ver-ejercicio/ver-ejercicio.component';

@Component({
  selector: 'app-ver-ejercicios',
  templateUrl: './ver-ejercicios.page.html',
  styleUrls: ['./ver-ejercicios.page.scss'],
})
export class VerEjerciciosPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false }) ionInfScroll: IonInfiniteScroll;

  iconoSearch = 'search';
  ejercicios = [];
  ejerciciosAux;

  musculosSegment = [
    'Todos',
    'Pecho',
    'Espalda',
    'Hombros',
    'Trapecio',
    'Piernas',
    'Gemelos',
    'Gluteos',
    'Biceps',
    'Triceps',
    'Abdomen'
  ];

  equipamientoSegment: { texto: string, valor: string, color: string }[] = [
    {
      texto: 'Todos',
      valor: 'Todos',
      color: 'white'
    },
    {
      texto: 'Sin Material',
      valor: 'sin',
      color: 'green'
    },
    {
      texto: 'Con Material',
      valor: 'con',
      color: 'red'
    }
  ];

  valorSegment = 'Todos';
  material = 'Todos';
  verBuscador = false;
  buscador = '';
  limiteSlice = 15;

  constructor(private serviceData: FireDbService,
    private pipe: FiltroEjerciciosPipe,
    private pipeMaterial: EquipamientoPipe,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.serviceData.getEjercicios().subscribe(
      (ejercicios) => {
        ejercicios.forEach(e => {
          const ejercicio: any = e.payload.val();
          this.ejercicios.push(ejercicio);
        });
      }
    );
  }

  cambiarMusculo(event) {
    this.valorSegment = event.detail.value;

    this.limiteSlice = 15;
    this.ejerciciosAux = this.pipe.transform(this.ejercicios, this.buscador, this.valorSegment);

    if (this.ejerciciosAux.length >= 14) {
      this.ionInfScroll.disabled = false;
    } else {
      this.ionInfScroll.disabled = true;
    }
  }

  cargarMasEjercicios(event) {
    setTimeout(() => {
      if (this.limiteSlice >= this.ejercicios.length) {
        this.ionInfScroll.disabled = true;
      } else {
        this.limiteSlice += 15;
      }
      event.target.complete();
    }, 1000);
  }

  mostrarOcultarBuscador() {
    if (this.verBuscador) {
      this.verBuscador = false;
      this.iconoSearch = 'search';
    } else {
      this.verBuscador = true;
      this.iconoSearch = 'close-outline';
    }
    this.limiteSlice = 15;
    this.ionInfScroll.disabled = false;
  }

  async verEjercicio(ej) {
    const modal = await this.modalCtrl.create({
      component: VerEjercicioComponent,
      componentProps: {
        ejercicio: ej
      }
    });
    return await modal.present();
  }

  cambiarMaterial(evt) {
    this.material = evt.detail.value;

    this.limiteSlice = 15;
    this.ejerciciosAux = this.pipe.transform(this.ejercicios, this.buscador, this.valorSegment);
    this.ejerciciosAux = this.pipeMaterial.transform(this.ejerciciosAux, this.material);

    if (this.ejerciciosAux.length >= 14) {
      this.ionInfScroll.disabled = false;
    } else {
      this.ionInfScroll.disabled = true;
    }
  }
}
