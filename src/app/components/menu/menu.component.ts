import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {Interfaces} from '../../interfaces/interfaces';
import {Data} from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    opciones: Observable<Interfaces[]>;
    darkMode = true;

  constructor( private dataService: DataService) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }


  cambio() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode;
    document.body.classList.toggle( 'dark' );

  }

    ngOnInit() {
        this.opciones = this.dataService.getMenuOpts();
    }



}
