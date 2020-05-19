import { Component, OnInit, Input } from '@angular/core';
import { IRutina } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-rutina-item',
  templateUrl: './rutina-item.component.html',
  styleUrls: ['./rutina-item.component.scss'],
})
export class RutinaItemComponent implements OnInit {

  @Input () rutina: IRutina;

  constructor() { }

  ngOnInit() {}

}
