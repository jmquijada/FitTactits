import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerEjerciciosPageRoutingModule } from './ver-ejercicios-routing.module';

import { VerEjerciciosPage } from './ver-ejercicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerEjerciciosPageRoutingModule
  ],
  declarations: [VerEjerciciosPage]
})
export class VerEjerciciosPageModule {}
