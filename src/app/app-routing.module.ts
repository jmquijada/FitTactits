import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'general',
    loadChildren: () => import('./pages/general/general.module').then( m => m.GeneralPageModule)
  },
  {
    path: 'ver-ejercicios',
    loadChildren: () => import('./pages/ver-ejercicios/ver-ejercicios.module').then( m => m.VerEjerciciosPageModule)
  },
  {
    path: 'ver-rutinas',
    loadChildren: () => import('./pages/ver-rutinas/ver-rutinas.module').then( m => m.VerRutinasPageModule)
  },
  {
    path: 'crear-rutinas',
    loadChildren: () => import('./pages/crear-rutinas/crear-rutinas.module').then( m => m.CrearRutinasPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
