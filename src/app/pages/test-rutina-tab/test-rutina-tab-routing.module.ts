import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestRutinaTabPage } from './test-rutina-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TestRutinaTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRutinaTabPageRoutingModule {}
