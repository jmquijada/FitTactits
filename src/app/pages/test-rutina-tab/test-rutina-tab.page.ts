import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TestRutinaModalPage } from 'src/app/components/test-rutina-modal/test-rutina-modal.page';

@Component({
  selector: 'app-test-rutina-tab',
  templateUrl: './test-rutina-tab.page.html',
  styleUrls: ['./test-rutina-tab.page.scss'],
})
export class TestRutinaTabPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirTest() {
    const modal = await this.modalCtrl.create({
      component: TestRutinaModalPage
/*
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
*/
    });
    return await modal.present();
  }
}
