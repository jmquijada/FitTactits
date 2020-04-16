import { NgModule } from '@angular/core';
import { FiltroAlimentoPipe } from './filtro-alimento.pipe';

@NgModule({
  declarations: [FiltroAlimentoPipe],
  exports: [FiltroAlimentoPipe],
  imports: []
})
export class PipesModule { }
