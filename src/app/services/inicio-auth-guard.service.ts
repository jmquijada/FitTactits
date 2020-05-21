import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class InicioAuthGuardService implements CanActivate {

  constructor(private fbAuth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    /* 
    if (this.fbAuth.authUser !== null) {
      this.router.navigate(['/principal']);
      return true;
    }*/
    return true;
  }
}
