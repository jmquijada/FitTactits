import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Interfaces} from '../interfaces/interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<Interfaces[]>('/assets/data/menu.json');
  }

  getAlimentacion() {
    return this.http.get<any[]>('/assets/data/food.json');
  }

  getAlimento(id: number): Observable<any> {
    return this.http.get<any>('/alimento/' + id);
  }
}
