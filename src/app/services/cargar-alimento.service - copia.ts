import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IAlimento } from '../interfaces/interfaces';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CargarAlimentoService implements Resolve<IAlimento[]> {

    constructor(private dataService: DataService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlimento[]> {
        return this.dataService.getAlimento(route.params['id']);
    }


}
