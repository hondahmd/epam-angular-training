import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.updateItems(this.coursesService.initVals);
  }

}
