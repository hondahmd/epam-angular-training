import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { CourseListItem } from './courses-list-item-model';

@Component({
  selector: 'courses-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courseItems: CourseListItem[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courseItems = this.coursesService.getItems();
  }

  deleteCourse(courseId: string) {
    console.log('delete: ', courseId);
  }

  handleLoadMore() {
    console.log('load more');
  }
}
