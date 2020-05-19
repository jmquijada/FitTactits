import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestRutinaModalPageRoutingModule } from './test-rutina-modal-routing.module';

import { TestRutinaModalPage } from './test-rutina-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestRutinaModalPageRoutingModule,
    FormsModule
  ],
  exports: [TestRutinaModalPage],
  declarations: [TestRutinaModalPage]
})
export class TestRutinaModalPageModule {}
