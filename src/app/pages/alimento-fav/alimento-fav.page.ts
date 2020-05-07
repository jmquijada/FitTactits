import {Component, Input, OnInit} from '@angular/core';
import {DataLocalService} from '../../services/data-local.service';
import {ActionSheetController} from '@ionic/angular';
import {IAlimento} from '../../interfaces/interfaces';


@Component({
  selector: 'app-alimento-fav',
  templateUrl: './alimento-fav.page.html',
  styleUrls: ['./alimento-fav.page.scss'],
})
export class AlimentoFavPage implements OnInit {

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  @Input() alimento: IAlimento;
  @Input() alimentos;
  @Input() enFavoritos;

  constructor(public datalocalService: DataLocalService,
              public actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {

  }

  async lanzarMenu() {

    let guardarBorrarBtn;

    if (this.enFavoritos) {
      guardarBorrarBtn = {
        text: 'Borrar Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Borrar de favoritos');
          this.enFavoritos = false;
          this.datalocalService.borrarAlimento(this.alimento);
        }
      };
    } else {
      guardarBorrarBtn = {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorito');
          this.datalocalService.guardarAlimento(this.alimento);
        }
      };
    }
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        guardarBorrarBtn,
        {
          text: 'Cancel',
          icon: 'close',
          cssClass: 'action-dark',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

}
