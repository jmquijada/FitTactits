import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../../services/fire-db.service';

@Component({
  selector: 'app-rutinas-tabs',
  templateUrl: './rutinas-tabs.page.html',
  styleUrls: ['./rutinas-tabs.page.scss'],
})
export class RutinasTabsPage implements OnInit {

  ejercicios = [];

  constructor(private serviceData: FireDbService) { }

  ngOnInit() {
    /*
    this.serviceData.getEjercicios().subscribe(
      (ejercicios) => {
        ejercicios.forEach(e => {
          const ejercicio: any = e.payload.val();
          this.ejercicios.push(ejercicio);
        });
      }
    );
    console.log('Ejercicios: ', this.ejercicios);
    */
  }

}
