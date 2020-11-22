import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: string): string {
    if (value === undefined || value === '') { return '' }
    const minuteNumber = Number(value.split('min')[0]);
    const hours = Math.floor(minuteNumber / 60);
    const minutes = minuteNumber - hours * 60;
    let result = '';
    result += hours ? `${hours}h` : '';
    result += minutes ? ` ${minutes}min` : '';
    return result;
  }

}
