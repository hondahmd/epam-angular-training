import { Pipe, PipeTransform } from '@angular/core';

import { CourseListItem } from './courses-list-item-model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: CourseListItem[]): CourseListItem[] {
    console.log('order by pipe');
    return value.sort((prev, next) => {
      const prevDate = new Date(prev.creationDate).valueOf();
      const nextDate = new Date(next.creationDate).valueOf();
      return nextDate - prevDate;
    });
  }

}
