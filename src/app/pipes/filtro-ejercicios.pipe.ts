import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEjercicios'
})
export class FiltroEjerciciosPipe implements PipeTransform {

  transform(arrEjercicios: any[], filtro: string, musculo: string): any {

    let arrAux = arrEjercicios.slice();

    // Si los dos filtros están vacios
    if (filtro === '' && musculo === 'Todos') {
      return arrEjercicios;
    } else {
      // Si el filtro de nombre no está vacío
      if (filtro !== '') {
        arrAux = arrEjercicios.filter(
          (ejercicio) => {
            return ejercicio.nombre.toLowerCase().includes(filtro.toLowerCase());
          }
        );
      }

      // Si el filtro de musculo no está vacío
      if (musculo !== 'Todos') {
        arrAux = arrAux.filter(
          (ejercicio) => {
            return ejercicio.musculo.includes(musculo);
          }
        );
      }
      return arrAux;
    }
  }

}
