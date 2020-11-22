import { Component, OnInit } from '@angular/core';

import { AddCourseService } from '../add-course.service';

@Component({
  selector: 'courses-add-course-title',
  templateUrl: './add-course-title.component.html',
  styleUrls: ['./add-course-title.component.scss']
})
export class AddCourseTitleComponent implements OnInit {

  constructor(private addCourseService: AddCourseService) { }

  ngOnInit(): void {
  }

  handleInput(event): void {
    this.addCourseService.updateField('title', event.target.value);
  }
}
