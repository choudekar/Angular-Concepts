import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvin'
})
export class KelvinPipe implements PipeTransform {

  transform(value: number): number {
    console.log("from kelvin");

    return value - 273.15;
  }

}
