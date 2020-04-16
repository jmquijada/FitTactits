import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {IAlimento} from '../../interfaces/interfaces';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-alimento',
    templateUrl: './alimento.page.html',
    styleUrls: ['./alimento.page.scss'],
})
export class AlimentoPage implements OnInit {

    idAlimento: number;
    alimento: IAlimento;

    constructor(private route: ActivatedRoute, private router: Router, private title: Title, private alertCtrl: AlertController) {
    }

    ngOnInit() {
        this.idAlimento = this.route.snapshot.params['id'];

        this.alimento = this.route.snapshot.data['alimento'][0];
        if (!this.alimento) {
            this.noExisteAlimento();
        }
    }

    async noExisteAlimento() {
        const alert = await this.alertCtrl.create({
            header: 'Alimento no Encontrado',
            message: 'Está intentando acceder a un alimento que no existe',
            buttons: [
                {
                    text: 'Volver',
                    handler: () => {
                        this.router.navigate(['/main/tabs/tab2']);
                    }
                }
            ]
        });

        await alert.present();
    }

}
