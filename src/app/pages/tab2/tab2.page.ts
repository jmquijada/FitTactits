import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {IAlimento} from '../../interfaces/interfaces';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    alimentos: any[] = [];
    textoBuscar = '';
    @Input() alimento: IAlimento;

    constructor(private dataService: DataService) {
    }

    buscar(event) {
        this.textoBuscar = event.detail.value;
        // console.log(event);
    }

    ngOnInit() {
        this.dataService.getAlimentacion()
            .subscribe(food => {
                this.alimentos = food;
            });
    }

}
