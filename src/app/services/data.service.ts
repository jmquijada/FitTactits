import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interfaces, IAlimento } from '../interfaces/interfaces';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient, private router: Router) { }

  getMenuOpts() {
    return this.http.get<Interfaces[]>('/assets/data/menu.json');
  }

  getAlimentacion() {
    return this.http.get<any[]>('/assets/data/food.json');
  }

  // OJO: retorna un Observable con un Array de una sola posicion
  // el catchError no funciona
  getAlimento(id) {
    return this.http.get<any>('/assets/data/food.json').pipe(
      map(
        (alimentos) => alimentos.filter(ali => ali.id == id)
      ),
      catchError(() => {
        this.router.navigate(['/main/tabs/tab2']);
        return of(null);
      })
    );
  }
}
