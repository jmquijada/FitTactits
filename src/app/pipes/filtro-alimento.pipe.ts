import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroAlimento'
})
export class FiltroAlimentoPipe implements PipeTransform {

  transform(array: any[], texto: string): any[] {

    if (texto === '') {
      return array;
    }

    return array.filter(item => {
      return item.name.toLowerCase()
          .includes(texto);
    });

  }

}
