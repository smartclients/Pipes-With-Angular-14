import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myuppercase',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string, isUpperCase: boolean = true): string {
    if (!isUpperCase) {
      return value.toLowerCase();
    }

    return value.toUpperCase();
  }
}
