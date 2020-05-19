import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinasTabsPage } from './rutinas-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: RutinasTabsPage,
    children: [
      {
        path: '',
        redirectTo: 'rutinas',
        pathMatch: 'full'
      },
      {
        path: 'rutinas',
        loadChildren: () => import('../rutinas/rutinas.module').then(m => m.RutinasPageModule)
      },
      {
        path: 'crear-rutina',
        loadChildren: () => import('../crear-rutina/crear-rutina.module').then(m => m.CrearRutinaPageModule)
      },
      {
        path: 'ejercicios',
        loadChildren: () => import('../ver-ejercicios/ver-ejercicios.module').then(m => m.VerEjerciciosPageModule)
      },
      {
        path: 'test-rutina',
        loadChildren: () => import('../test-rutina-tab/test-rutina-tab.module').then(m => m.TestRutinaTabPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinasTabsPageRoutingModule {}
