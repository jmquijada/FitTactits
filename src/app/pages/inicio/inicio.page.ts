import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {

  constructor() {}

  opciones = {
    slidesPerView: 1,
    freeMode: false
  };

  login(event) {

  }

}
