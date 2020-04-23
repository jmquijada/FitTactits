import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {IPedometerData} from '@ionic-native/pedometer';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  steps: number[] = [];

  constructor(private storage: Storage) {
    this.cargarPasos();
  }

  guardarPasos(step) {
    this.steps.push(step);
    this.storage.set('pasos', this.steps);

  }

  async cargarPasos() {
    return await this.storage.get('pasos');

  }

}
