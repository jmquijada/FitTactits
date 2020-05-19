import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearRutinaPageRoutingModule } from './crear-rutina-routing.module';

import { CrearRutinaPage } from './crear-rutina.page';
import { ComponentsModule } from '../../components/components.module';
import { PopEjerciciosComponent } from '../../components/pop-ejercicios/pop-ejercicios.component';

@NgModule({
  entryComponents: [PopEjerciciosComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CrearRutinaPageRoutingModule
  ],
  declarations: [CrearRutinaPage]
})
export class CrearRutinaPageModule {}
