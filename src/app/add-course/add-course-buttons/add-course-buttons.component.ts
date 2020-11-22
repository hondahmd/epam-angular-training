import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AddCourseService } from '../add-course.service';
import { CoursesService } from '../../courses/courses.service';

@Component({
  selector: 'courses-add-course-buttons',
  templateUrl: './add-course-buttons.component.html',
  styleUrls: ['./add-course-buttons.component.scss']
})
export class AddCourseButtonsComponent implements OnInit {

  constructor(
    private addCourseService: AddCourseService,
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  handleCancel() {
    this.addCourseService.clear();
    this.router.navigate(['/courses']);
  }

  handleSave() {
    const info = this.addCourseService.getNewCourse();
    info.id = new Date().toISOString();
    this.coursesService.createItem(info);
    this.router.navigate(['/courses']);
  }

}
