import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-ver-ejercicio',
  templateUrl: './ver-ejercicio.component.html',
  styleUrls: ['./ver-ejercicio.component.scss'],
})
export class VerEjercicioComponent implements OnInit {

  @Input () ejercicio: any;

  constructor(private modalCtrl: ModalController, private platform: Platform) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
