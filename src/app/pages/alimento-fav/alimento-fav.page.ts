import { Component, OnInit } from '@angular/core';
import {DataLocalService} from '../../services/data-local.service';


@Component({
  selector: 'app-alimento-fav',
  templateUrl: './alimento-fav.page.html',
  styleUrls: ['./alimento-fav.page.scss'],
})
export class AlimentoFavPage implements OnInit {

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(public datalocalService: DataLocalService) { }

  ngOnInit() {
  }

}
