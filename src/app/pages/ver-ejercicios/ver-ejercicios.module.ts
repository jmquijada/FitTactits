import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerEjerciciosPageRoutingModule } from './ver-ejercicios-routing.module';

import { VerEjerciciosPage } from './ver-ejercicios.page';
import { FiltroEjerciciosPipe } from '../../pipes/filtro-ejercicios.pipe';
import { PipesModule } from '../../pipes/pipes.module';
import { VerEjercicioComponent } from '../../ver-ejercicio/ver-ejercicio.component';
import { VerEjercicioComponentModule } from '../../ver-ejercicio/ver-ejercicio.module';
import { EquipamientoPipe } from '../../pipes/equipamiento-pipe.pipe';

@NgModule({
  entryComponents: [VerEjercicioComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerEjerciciosPageRoutingModule,
    PipesModule,
    VerEjercicioComponentModule
  ],
  declarations: [VerEjerciciosPage],
  providers: [FiltroEjerciciosPipe, EquipamientoPipe]
})
export class VerEjerciciosPageModule {}
