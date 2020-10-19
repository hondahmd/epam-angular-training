import { Injectable } from '@angular/core';
import { CourseListItem } from './courses-list/courses-list-item-model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getItems(): CourseListItem[] {
    return [
      {
        id: '1',
        title: 'A',
        creationDate: '1',
        duration: 30,
        description: 'A'
      },
      {
        id: '2',
        title: 'B',
        creationDate: '1',
        duration: 30,
        description: 'B'
      }
    ]
  }
}
