import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CargarAlimentoService implements Resolve<any> {

  constructor(private dataService: DataService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.dataService.getAlimento(route.params['id']).pipe(
        catchError(error => {
          return of(null);
        })
    );
  }


}
