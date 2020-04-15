import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerRutinasPage } from './ver-rutinas.page';

const routes: Routes = [
  {
    path: '',
    component: VerRutinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerRutinasPageRoutingModule {}
