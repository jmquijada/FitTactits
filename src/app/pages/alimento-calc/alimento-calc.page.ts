import {Component, OnInit} from '@angular/core';
import {DataLocalService} from '../../services/data-local.service';

@Component({
    selector: 'app-alimento-calc',
    templateUrl: './alimento-calc.page.html',
    styleUrls: ['./alimento-calc.page.scss'],
})
export class AlimentoCalcPage implements OnInit {

    private numero1: string;
    private numero2: string;
    private resultado: number;
    private operacion: string;

    constructor(private datalocalService: DataLocalService) {
    }

    ngOnInit() {

    }

}
