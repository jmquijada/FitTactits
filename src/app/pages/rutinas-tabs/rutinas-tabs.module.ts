import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinasTabsPageRoutingModule } from './rutinas-tabs-routing.module';

import { RutinasTabsPage } from './rutinas-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinasTabsPageRoutingModule
  ],
  declarations: [RutinasTabsPage]
})
export class RutinasTabsPageModule {}
