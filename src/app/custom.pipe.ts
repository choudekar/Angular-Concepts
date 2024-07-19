import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  pure: false
})
export class CustomPipe implements PipeTransform {

  transform(value: { fullName: string }): string {
    return value.fullName;
  }

}
