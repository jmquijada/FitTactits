import {Component, Input, OnInit} from '@angular/core';
import {IAlimento} from '../../interfaces/interfaces';
import {DataLocalService} from '../../services/data-local.service';

@Component({
  selector: 'app-alimento-fav',
  templateUrl: './alimento-fav.component.html',
  styleUrls: ['./alimento-fav.component.scss'],
})
export class AlimentoFavComponent implements OnInit {

  @Input() alimentos: IAlimento[] = [];
  @Input() enFavoritos = false;

  constructor(public datalocalService: DataLocalService) { }

  ngOnInit() {}

}
