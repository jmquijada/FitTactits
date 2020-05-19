import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { VisualizarRutinaPage } from './visualizar-rutina.page';

@NgModule({
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [VisualizarRutinaPage]
})
export class VisualizarRutinaPageModule {}
