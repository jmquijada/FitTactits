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
    @Input() alimento: IAlimento;
    arrayfiltrado: any[] = this.alimentos.slice();
    enFavoritos;

    constructor(private dataService: DataService) {

    }

    // Método para buscar un alimento específico
    buscar(event) {
        this.arrayfiltrado = this.alimentos.filter(alimento => {
            return alimento.name.toLowerCase().includes(event.detail.value);
        });
    }

    // Inicializamos la página con todos los alimentos - ¿Infinite Scroll?
    ngOnInit() {
        this.dataService.getAlimentacion()
            .subscribe(food => {
                this.alimentos = food;
                this.arrayfiltrado = this.alimentos.slice();
                // console.log(food.length);
                // console.log(this.alimentos);
            });
    }

}
