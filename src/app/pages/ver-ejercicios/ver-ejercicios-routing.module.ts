import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerEjerciciosPage } from './ver-ejercicios.page';

const routes: Routes = [
  {
    path: '',
    component: VerEjerciciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerEjerciciosPageRoutingModule {}
