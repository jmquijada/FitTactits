import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CheckAuthGuardService implements CanActivate {

  constructor(private fbAuth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.fbAuth.authUser !== null) {
      return true;
    }
    this.router.navigate(['/inicio']);
    return false;
  }
}
