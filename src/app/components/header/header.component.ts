import {Component, Input, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;
  color: '#c4302b';
  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {}

  // Para controlar que se abra o cierre el menú
  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
