import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { CourseInterface } from '../../models/course-interface';
import {BreadcrumbInterface} from '../../../shared/models/breadcrumb-interface';

@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  breadcrumbs: BreadcrumbInterface[] = [
    {text: 'Courses'}
  ];

  filter: string;

  courseItems: CourseInterface[] = [];

  loading = false;

  error: string;

  count = 10;

  constructor(
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.error = null;
    this.loading = true;
    this.coursesService
      .getItems(this.count, this.filter)
      .subscribe(
        data => {
          this.loading = false;
          this.courseItems = data;
        },
        error => {
          this.loading = false;
          this.error = error?.message || 'Error';
        }
      );
  }

  deleteCourse(courseId: number): void {
    if (!confirm("Do you really want to delete the course?")) return;

    this.error = null;
    this.loading = true;
    this.coursesService
      .deleteItem(courseId)
      .subscribe(
        () => {
          this.loading = false;
          this.refresh();
        },
        error => {
          this.loading = false;
          this.error = error?.message || 'Error';
        }
      );
  }

  handleLoadMore(event: Event): void {
    event.preventDefault(); // this prevents from going to "#" link

    this.count += 10;
    this.refresh();
  }

  search(text: string) {
    this.filter = text;
    this.count = 10; //Filter was changed. You have to reset pagination.
    this.refresh();
  }
}
