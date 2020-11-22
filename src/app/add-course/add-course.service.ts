import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CourseListItem } from '../courses/courses-list/courses-list-item-model';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {

  constructor() { }

  newCourse: CourseListItem = {
    id: '',
    title: '',
    creationDate: '',
    duration: '',
    description: '',
    stared: false,
  }

  newCouseSubject: Subject<CourseListItem> = new Subject<CourseListItem>();

  updateField(key, val) {
    const newInfo = { ...this.newCourse };
    newInfo[key] = val;
    this.newCourse = newInfo;
    this.newCouseSubject.next(newInfo);
  }

  clear() {
    const newInfo = {
      id: '',
      title: '',
      creationDate: '',
      duration: '',
      description: '',
      stared: false,
    };
    this.newCourse = newInfo;
    this.newCouseSubject.next(newInfo);
  }

  getNewCourse(): CourseListItem {
    return this.newCourse;
  }
}
