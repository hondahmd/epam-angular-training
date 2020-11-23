import { Pipe, PipeTransform } from '@angular/core';

import { CourseInterface } from '../models/course-interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: CourseInterface[]): CourseInterface[] {
    //Clone value before, because sort() will change array
    //You shouldn't to change value in a pipe
    value = value.slice(0);
    return value.sort((prev, next) => {
      const prevDate = new Date(prev.creationDate).valueOf();
      const nextDate = new Date(next.creationDate).valueOf();
      return nextDate - prevDate;
    });
  }
}
