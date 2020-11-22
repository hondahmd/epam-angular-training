import { Component, OnInit } from '@angular/core';

import { AddCourseService } from '../add-course.service';

@Component({
  selector: 'courses-add-course-description',
  templateUrl: './add-course-description.component.html',
  styleUrls: ['./add-course-description.component.scss']
})
export class AddCourseDescriptionComponent implements OnInit {

  constructor(private addCourseService: AddCourseService) { }

  ngOnInit(): void {
  }

  handleInput(event): void {
    this.addCourseService.updateField('description', event.target.value);
  }

}
