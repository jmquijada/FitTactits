import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {IPedometerData} from '@ionic-native/pedometer';
import {IAlimento} from '../interfaces/interfaces';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  steps: number[] = [];
  alimentos: IAlimento[] = [];
  SOMA = '+';
  SUBTRACAO = '-';
  DIVISAO = '/';
  MULTIPLICACAO = '*';


  constructor(private storage: Storage, private toastCtrl: ToastController) {
    this.cargarPasos();
  }

  guardarAlimento(alimento: IAlimento) {
    const existe = this.alimentos.find( ali => ali.name === alimento.name);

    if (!existe) {
      this.alimentos.unshift(alimento);
      this.storage.set('favoritos', this.alimentos);
    }

    this.presentToast('Agregado a favoritos');
  }

  borrarAlimento(alimento: IAlimento) {
    this.alimentos = this.alimentos.filter( ali => ali.name !== alimento.name);
    this.storage.set('favoritos', this.alimentos);

    this.presentToast('Borrado de favoritos');
  }

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  guardarPasos(step) {
    this.steps.push(step);
    this.storage.set('pasos', this.steps);

  }

  async cargarPasos() {
    return await this.storage.get('pasos');

  }

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazena o resultado da operação

    switch (operacao) {
      case this.SOMA:
        resultado = num1 + num2;
        break;
      case this.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case this.DIVISAO:
        resultado = num1 / num2;
        break;
      case this.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
