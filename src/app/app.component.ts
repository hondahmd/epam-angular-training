import { Component } from '@angular/core';

import { CoursesService } from './courses/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-training';

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    console.log('init');
    this.coursesService.updateItems(this.coursesService.initVals);
  }
}
