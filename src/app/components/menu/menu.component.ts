import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.opciones = this.dataService.getMenuOpts();
  }

}
