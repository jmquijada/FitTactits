import { Pipe, PipeTransform } from '@angular/core';
import { IEjercicio } from '../interfaces/interfaces';

@Pipe({
  name: 'filtroSimpleEjercicio'
})
export class FiltroSimplePipe implements PipeTransform {

  transform(arrayEj: IEjercicio[], texto: string = null): any {
    let arrAux = arrayEj.slice();
    if (!texto === null) {
      return arrayEj;
    } else {
      return arrAux.filter((ejercicio) => {
        return ejercicio.nombre.toLowerCase().includes(texto.toLowerCase());
      });
    }
  }

}
