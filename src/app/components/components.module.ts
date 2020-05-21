import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RutinaItemComponent } from './rutina-item/rutina-item.component';
import { CrearRutinaSimpleComponent } from './crear-rutina-simple/crear-rutina-simple.component';
import { MarcadorComponent } from './marcador/marcador.component';
import { CrearRutinaCompletoComponent } from './crear-rutina-completo/crear-rutina-completo.component';
import { PopEjerciciosComponent } from './pop-ejercicios/pop-ejercicios.component';
import { PipesModule } from '../pipes/pipes.module';
import { GraficaPasosComponent } from './grafica-pasos/grafica-pasos.component';


@NgModule({
    declarations: [
        MenuComponent,
        HeaderComponent,
        RutinaItemComponent,
        CrearRutinaSimpleComponent,
        MarcadorComponent,
        CrearRutinaCompletoComponent,
        PopEjerciciosComponent,
        GraficaPasosComponent
    ],
    exports: [
        MenuComponent,
        HeaderComponent,
        RutinaItemComponent,
        CrearRutinaSimpleComponent,
        MarcadorComponent,
        CrearRutinaCompletoComponent,
        PopEjerciciosComponent,
        GraficaPasosComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule,
        PipesModule
    ]
})
export class ComponentsModule {
}
