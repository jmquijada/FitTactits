import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CargarAlimentoService} from './services/cargar-alimento.service';
import { CheckAuthGuardService } from './services/check-auth-guard.service';
import { AcercaDePageModule } from './pages/acerca-de/acerca-de.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
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
    loadChildren: () => import('./pages/ver-ejercicios/ver-ejercicios.module').then( m => m.VerEjerciciosPageModule),
    canActivate: [CheckAuthGuardService]
  },
  {
    path: 'rutinas-tabs',
    loadChildren: () => import('./pages/rutinas-tabs/rutinas-tabs.module').then( m => m.RutinasTabsPageModule),
    canActivate: [CheckAuthGuardService]
  },
  {
    path: 'alimentos',
    loadChildren: () => import('./pages/alimentos/alimentos.module').then( m => m.AlimentosPageModule),
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
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [CheckAuthGuardService]
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./pages/acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'progreso',
    loadChildren: () => import('./pages/progreso/progreso.module').then( m => m.ProgresoPageModule)
  },
  {
    path: 'progreso-tabs',
    loadChildren: () => import('./pages/progreso-tabs/progreso-tabs.module').then( m => m.ProgresoTabsPageModule),
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
