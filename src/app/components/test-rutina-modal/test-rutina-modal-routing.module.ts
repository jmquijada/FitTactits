import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestRutinaModalPage } from './test-rutina-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TestRutinaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRutinaModalPageRoutingModule {}
