import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearRutinasPageRoutingModule } from './crear-rutinas-routing.module';

import { CrearRutinasPage } from './crear-rutinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearRutinasPageRoutingModule
  ],
  declarations: [CrearRutinasPage]
})
export class CrearRutinasPageModule {}
