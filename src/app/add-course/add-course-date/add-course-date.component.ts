import { Component, OnInit } from '@angular/core';

import { AddCourseService } from '../add-course.service';

@Component({
  selector: 'courses-add-course-date',
  templateUrl: './add-course-date.component.html',
  styleUrls: ['./add-course-date.component.scss']
})
export class AddCourseDateComponent implements OnInit {

  constructor(private addCourseService: AddCourseService) { }

  ngOnInit(): void {
  }

  handleInput(event): void {
    this.addCourseService.updateField('creationDate', event.target.value);
  }

}
