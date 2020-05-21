import { Component, OnInit } from '@angular/core';
import { IRutina } from '../../interfaces/interfaces';
import { CrearRutinaService } from '../../services/crear-rutina.service';
import { FireDbService } from '../../services/fire-db.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.page.html',
  styleUrls: ['./crear-rutina.page.scss'],
})
export class CrearRutinaPage implements OnInit {

  modoSeleccionado = 'simple';
  rutinasCreadas: IRutina[];

  constructor(private crService: CrearRutinaService, private db: FireDbService, private fbAuth: AuthService) { }

  ngOnInit() {
    this.db.getRutinasCreadas(this.fbAuth.authUser.uid).subscribe(snap => {
      this.rutinasCreadas = [];
      snap.forEach((r) => {
        let rutina: any = r.payload.val();
        this.rutinasCreadas.push(rutina);
      });
    });
  }

  cambioModo(event) {
    this.modoSeleccionado = event.detail.value;
    this.crService.resetDatos();
  }


}

