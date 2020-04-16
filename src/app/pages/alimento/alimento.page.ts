import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-alimento',
  templateUrl: './alimento.page.html',
  styleUrls: ['./alimento.page.scss'],
})
export class AlimentoPage implements OnInit {

  idAlimento: number;
  alimento: any;

  constructor(private route: ActivatedRoute, private title: Title, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlimento(this.route.snapshot.params[this.idAlimento]);
    console.log(this.alimento);
  }

}
