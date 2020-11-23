import { Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from '../models/course-interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: CourseInterface[], searchInput: string): CourseInterface[] {
    searchInput = (searchInput || '').trim();
    if (!searchInput) return items;
    return items.filter(item => (item.title || '').toLowerCase().indexOf(searchInput.toLowerCase()) >= 0);
  }
}
