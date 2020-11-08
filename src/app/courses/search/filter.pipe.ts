import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../courses-list/courses-list-item-model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: CourseListItem[], searchInput: string): CourseListItem[] {
    return items.filter((item) => item.title.includes(searchInput));
  }

}
