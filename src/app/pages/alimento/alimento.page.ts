import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-alimento',
  templateUrl: './alimento.page.html',
  styleUrls: ['./alimento.page.scss'],
})
export class AlimentoPage implements OnInit {

  idAlimento: number;
  alimento: any;

  constructor(private route: ActivatedRoute, private title: Title) { }

  ngOnInit() {
    this.idAlimento = this.route.snapshot.params['id'];
    this.alimento = this.route.snapshot.data['alimento'];
    console.log(this.alimento);
  }

}
