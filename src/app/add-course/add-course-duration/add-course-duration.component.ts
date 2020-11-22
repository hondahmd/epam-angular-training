import { Component, OnInit } from '@angular/core';

import { AddCourseService } from '../add-course.service';

@Component({
  selector: 'courses-add-course-duration',
  templateUrl: './add-course-duration.component.html',
  styleUrls: ['./add-course-duration.component.scss']
})
export class AddCourseDurationComponent implements OnInit {
  duration: string;

  constructor(private addCourseService: AddCourseService) { }

  ngOnInit(): void {
  }

  handleInput(event): void {
    this.addCourseService.updateField('duration', event.target.value);
    this.duration = event.target.value;
  }

}
