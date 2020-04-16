import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAlimento, Interfaces} from '../interfaces/interfaces';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient, private router: Router) {
    }

    getMenuOpts() {
        return this.http.get<Interfaces[]>('/assets/data/menu.json');
    }

    getAlimentacion() {
        return this.http.get<any[]>('/assets/data/food.json');
    }

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
