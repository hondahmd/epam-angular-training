import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingStatusService {

  constructor() { }

  loginStatus: Subject<boolean> = new Subject<boolean>();
  getLoginStatus() {
    return this.loginStatus;
  }

  coursesStatus: Subject<boolean> = new Subject<boolean>();
  getCoursesStatus() {
    return this.coursesStatus;
  }

  deleteCourseStatus: Subject<boolean> = new Subject<boolean>();
  getDeleteCourseStatus() {
    return this.deleteCourseStatus;
  }

  courseByIdStatus: Subject<boolean> = new Subject<boolean>();
  getCourseByIdStatus() {
    return this.courseByIdStatus;
  }

  editCourseStatus: Subject<boolean> = new Subject<boolean>();
  getEditCourseStatus() {
    return this.courseByIdStatus;
  }
}
