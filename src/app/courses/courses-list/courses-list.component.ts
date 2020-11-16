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
  constructor(
    private coursesService: CoursesService,
    private orderByPipe: OrderByPipe
  ) { }

  public courseItems: CourseListItem[] = [];

  showCourses: boolean;

  showDeleteModal: boolean;

  deleteCourseId: string;

  ngOnInit(): void {
    this.coursesService.updateCourseItems.subscribe(
      (val) => {
        this.courseItems = val;
        this.showCourses = val.length > 0;
      }
    )
    this.courseItems = this.orderByPipe.transform(this.coursesService.getItems());
  }

  toggleModal(): void {
    this.showDeleteModal = !this.showDeleteModal;
  }

  saveDeleteCouseId(courseId: string): void {
    this.toggleModal();
    this.deleteCourseId = courseId;
  }

  deleteCourse(courseId: string): void {
    console.log('delete: ', courseId);
    this.toggleModal();
    this.coursesService.deleteItem(courseId);
  }

  handleLoadMore(): void {
    console.log('load more');
  }
}
