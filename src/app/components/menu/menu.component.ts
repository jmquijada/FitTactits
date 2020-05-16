import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {Interfaces} from '../../interfaces/interfaces';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    opciones: Observable<Interfaces[]>;
    darkMode = true;

    constructor(private dataService: DataService) {
        // variables que comprueba si el modo oscuro está habilitado o no
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = prefersDark.matches;
    }

    // Quitar y poner modo oscuro
    cambio() {
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark');

    }

    ngOnInit() {
        // cargar opciones del menú
        this.opciones = this.dataService.getMenuOpts();
    }


}
