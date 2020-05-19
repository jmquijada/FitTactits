import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'equipamientoPipe'
})
export class EquipamientoPipe implements PipeTransform {

  transform(arrEjercicios: any[], filtro: string): any {
    if(filtro === 'Todos') {
      return arrEjercicios;
    } else{
      return arrEjercicios.filter((ejercicio) => {
        if(filtro === 'sin') {
          return ejercicio.equipamiento === false;
        } else if (filtro === 'con') {
          return ejercicio.equipamiento === true;
        }
      });
    }
  }

}
