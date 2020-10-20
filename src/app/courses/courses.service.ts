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
        creationDate: '2020-10-01',
        duration: '30min',
        description: 'Angular basic course'
      },
      {
        id: '2',
        title: 'B',
        creationDate: '2020-10-01',
        duration: '30min',
        description: 'Angular advanced course'
      }
    ]
  }
}
