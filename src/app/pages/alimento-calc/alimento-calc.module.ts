import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentoCalcPageRoutingModule } from './alimento-calc-routing.module';

import { AlimentoCalcPage } from './alimento-calc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentoCalcPageRoutingModule
  ],
  declarations: [AlimentoCalcPage]
})
export class AlimentoCalcPageModule {}
