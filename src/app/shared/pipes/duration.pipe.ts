import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return '';
    const hours = Math.floor(value / 60);
    const minutes = value - hours * 60;
    let result = '';
    result += hours ? `${hours}h` : '';
    result += minutes ? ` ${minutes}min` : '';
    return result;
  }

}
