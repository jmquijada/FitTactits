import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {IonicModule} from '@ionic/angular';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        MenuComponent,
        HeaderComponent
    ],
    exports: [
        MenuComponent,
        HeaderComponent
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
