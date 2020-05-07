import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {IAlimento} from '../interfaces/interfaces';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class DataLocalService {

    steps: number[] = [];
    alimentos: IAlimento[] = [];


    constructor(private storage: Storage, private toastCtrl: ToastController) {
        this.cargarPasos();
        this.cargarAlimentos();
    }

    async cargarAlimentos() {
        const favoritos = await this.storage.get('favoritos');
        if (favoritos) {
            this.alimentos = favoritos;
        }
        console.log(this.alimentos);
    }

    guardarAlimento(alimento: IAlimento) {
        const existe = this.alimentos.find(ali => ali.name === alimento.name);

        if (!existe) {
            this.alimentos.unshift(alimento);
            this.storage.set('favoritos', this.alimentos);
        }

        this.presentToast('Agregado a favoritos');
    }

    borrarAlimento(alimento: IAlimento) {
        this.alimentos = this.alimentos.filter(ali => ali.name !== alimento.name);
        this.storage.set('favoritos', this.alimentos);

        this.presentToast('Borrado de favoritos');
    }

    async presentToast(message: string) {
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

}
