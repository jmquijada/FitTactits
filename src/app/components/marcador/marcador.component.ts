import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss'],
})
export class MarcadorComponent implements OnInit {

  @Input () minutos: number;
  @Input () segundos: number;

  constructor() { }

  ngOnInit() {}

  
}
