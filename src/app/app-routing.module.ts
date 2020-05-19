import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CargarAlimentoService} from './services/cargar-alimento.service';
import { CheckAuthGuardService } from './services/check-auth-guard.service';
import { InicioAuthGuardService } from './services/inicio-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'principal'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [InicioAuthGuardService]
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate: [CheckAuthGuardService]
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
    path: 'rutinas-tabs',
    loadChildren: () => import('./pages/rutinas-tabs/rutinas-tabs.module').then( m => m.RutinasTabsPageModule),
    canActivate: [CheckAuthGuardService]
  },
  {
    path: 'info-user',
    loadChildren: () => import('./pages/info-user/info-user.module').then( m => m.InfoUserPageModule),
    canActivate: [CheckAuthGuardService]
  },
  {
    path: 'amigos',
    loadChildren: () => import('./pages/amigos/amigos.module').then( m => m.AmigosPageModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./pages/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule),
    canActivate: [CheckAuthGuardService]
  },
  {
    path: 'alimentos',
    loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule),
    canActivate: [CheckAuthGuardService]
  },
  {
    path: 'alimento/:id',
    loadChildren: () => import('./pages/alimento/alimento.module').then( m => m.AlimentoPageModule), resolve: {
      alimento: CargarAlimentoService
    },
    canActivate: [CheckAuthGuardService]
  },
  {
    path: 'alimento-calc',
    loadChildren: () => import('./pages/alimento-calc/alimento-calc.module').then( m => m.AlimentoCalcPageModule),
    canActivate: [CheckAuthGuardService]
  },
  {
    path: 'alimento-fav',
    loadChildren: () => import('./pages/alimento-fav/alimento-fav.module').then( m => m.AlimentoFavPageModule),
    canActivate: [CheckAuthGuardService]
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
