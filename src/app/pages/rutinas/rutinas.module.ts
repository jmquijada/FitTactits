import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinasPageRoutingModule } from './rutinas-routing.module';

import { RutinasPage } from './rutinas.page';
import { ComponentsModule } from '../../components/components.module';
import { VisualizarRutinaPage } from '../../components/visualizar-rutina/visualizar-rutina.page';
import { VisualizarRutinaPageModule } from '../../components/visualizar-rutina/visualizar-rutina.module';

@NgModule({
  entryComponents: [VisualizarRutinaPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinasPageRoutingModule,
    VisualizarRutinaPageModule,
    ComponentsModule
  ],
  declarations: [RutinasPage]
})
export class RutinasPageModule {}
