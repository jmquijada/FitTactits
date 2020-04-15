import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerRutinasPageRoutingModule } from './ver-rutinas-routing.module';

import { VerRutinasPage } from './ver-rutinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerRutinasPageRoutingModule
  ],
  declarations: [VerRutinasPage]
})
export class VerRutinasPageModule {}
