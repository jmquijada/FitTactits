import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentoCalcPage } from './alimento-calc.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentoCalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentoCalcPageRoutingModule {}
