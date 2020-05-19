import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestRutinaTabPageRoutingModule } from './test-rutina-tab-routing.module';

import { TestRutinaTabPage } from './test-rutina-tab.page';
import { TestRutinaModalPageModule } from '../../test-rutina-modal/test-rutina-modal.module';
import { TestRutinaModalPage } from '../../test-rutina-modal/test-rutina-modal.page';
import { ComponentsModule } from '../../components/components.module';

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
