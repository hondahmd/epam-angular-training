import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { CourseInterface } from '../../models/course-interface';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import {BreadcrumbInterface} from '../../../shared/models/breadcrumb-interface';
import {FilterPipe} from '../../pipes/filter.pipe';

@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [
    OrderByPipe,
    FilterPipe,
  ]
})
export class CoursesListComponent implements OnInit {
  breadcrumbs: BreadcrumbInterface[] = [
    {text: 'Courses'}
  ];

  filter: string;

  constructor(
    private coursesService: CoursesService,
    private orderByPipe: OrderByPipe,
    private filterPipe: FilterPipe
  ) { }

  public courseItems: CourseInterface[] = [];

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    const filtered = this.filterPipe.transform(this.coursesService.getItems(), this.filter);
    this.courseItems = this.orderByPipe.transform(filtered);
  }

  deleteCourse(courseId: string): void {
    if (!confirm("Do you really want to delete the course?")) return;
    this.coursesService.deleteItem(courseId);
    this.refresh();
  }

  handleLoadMore(event: Event): void {
    event.preventDefault();
    console.log('load more');
  }

  search(text: string) {
    this.filter = text;
    this.refresh();
  }
}
