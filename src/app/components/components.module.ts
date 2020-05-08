import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {IonicModule} from '@ionic/angular';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {AlimentoCalcComponent} from './alimento-calc/alimento-calc.component';
import {AlimentoFavComponent} from './alimento-fav/alimento-fav.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        MenuComponent,
        HeaderComponent,
        AlimentoCalcComponent,
        AlimentoFavComponent
    ],
    exports: [
        MenuComponent,
        HeaderComponent,
        AlimentoCalcComponent,
        AlimentoFavComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule
    ]
})
export class ComponentsModule {
}
