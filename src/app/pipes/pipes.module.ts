import { NgModule } from '@angular/core';
import { FiltroAlimentoPipe } from './filtro-alimento.pipe';
import { FiltroEjerciciosPipe } from './filtro-ejercicios.pipe';
import { EquipamientoPipe } from './equipamiento-pipe.pipe';
import { FiltroSimplePipe } from './filtro-simple.pipe';

@NgModule({
  declarations: [
    FiltroAlimentoPipe,
    FiltroEjerciciosPipe,
    EquipamientoPipe,
    FiltroSimplePipe
  ],
  exports: [
    FiltroAlimentoPipe,
    FiltroEjerciciosPipe,
    EquipamientoPipe,
    FiltroSimplePipe
  ],
  imports: []
})
export class PipesModule { }
