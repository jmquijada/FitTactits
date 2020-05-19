import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestRutinaTabPageRoutingModule } from './test-rutina-tab-routing.module';
import { TestRutinaModalPage } from 'src/app/components/test-rutina-modal/test-rutina-modal.page';
import { TestRutinaModalPageModule } from 'src/app/components/test-rutina-modal/test-rutina-modal.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TestRutinaTabPage } from './test-rutina-tab.page';



@NgModule({
  entryComponents: [TestRutinaModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestRutinaTabPageRoutingModule,
    TestRutinaModalPageModule,
    ComponentsModule
  ],
  declarations: [TestRutinaTabPage]
})
export class TestRutinaTabPageModule {}
