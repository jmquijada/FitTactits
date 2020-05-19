import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerEjercicioComponent } from './ver-ejercicio.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [VerEjercicioComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [VerEjercicioComponent]
})
export class VerEjercicioComponentModule { }
