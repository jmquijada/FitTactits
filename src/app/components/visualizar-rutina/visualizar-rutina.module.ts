import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components.module';
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
