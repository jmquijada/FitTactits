import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentoFavPage } from './alimento-fav.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentoFavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentoFavPageRoutingModule {}
