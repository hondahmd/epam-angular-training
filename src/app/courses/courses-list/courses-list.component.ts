import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { CourseListItem } from './courses-list-item-model';
import { OrderByPipe } from './order-by.pipe';

@Component({
  selector: 'courses-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [OrderByPipe]
})
export class CoursesListComponent implements OnInit {
  public courseItems: CourseListItem[] = [];

  showCourses: boolean;

  constructor(
    private coursesService: CoursesService,
    private orderByPipe: OrderByPipe
  ) { }

  ngOnInit(): void {
    this.coursesService.updateCourseItems.subscribe(
      (val) => {
        this.courseItems = val;
        this.showCourses = val.length > 0;
      }
    )
    this.courseItems = this.orderByPipe.transform(this.coursesService.getItems());
  }

  deleteCourse(courseId: string): void {
    console.log('delete: ', courseId);
  }

  handleLoadMore(): void {
    console.log('load more');
  }
}
