import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { CourseInterface } from '../../models/course-interface';
import { BreadcrumbInterface } from '../../../shared/models/breadcrumb-interface';

@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  breadcrumbs: BreadcrumbInterface[] = [
    { text: 'Courses' }
  ];

  courseAddStep: number = 3;

  countOfCourses: number = this.courseAddStep;

  filter: string;

  constructor(
    private coursesService: CoursesService,
  ) { }

  public courseItems: CourseInterface[] = [];

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.coursesService
      .getItems(this.countOfCourses, this.filter)
      .subscribe(
        (data) => this.courseItems = data,
        error => alert(error.message || 'Error'),
      )
  }

  deleteCourse(courseId: string): void {
    if (!confirm("Do you really want to delete the course?")) return;
    this.coursesService
      .deleteItem(courseId)
      .subscribe(
        () => this.refresh(),
        error => alert(error.message || 'Error'),
      );
  }

  handleLoadMore(event: Event): void {
    event.preventDefault();
    this.countOfCourses += this.courseAddStep;
    this.refresh();
  }

  search(text: string) {
    this.filter = text;
    this.refresh();
  }
}
