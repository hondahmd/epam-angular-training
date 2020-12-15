import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { CourseInterface } from '../../models/course-interface';
import { BreadcrumbInterface } from '../../../shared/models/breadcrumb-interface';
import { LoadingStatusService } from '../../../shared/services/loading-status.service';

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

  loadingStatus = {
    all: false,
    courses: false,
    delete: false,
  };

  coursesLoadingStatus: boolean = false;

  constructor(
    private coursesService: CoursesService,
    private loadingStatusService: LoadingStatusService,
  ) { }

  public courseItems: CourseInterface[] = [];

  ngOnInit(): void {
    this.loadingStatusService.getCoursesStatus().subscribe(status => this.updateLoadingStatus(status, 'courses'));
    this.loadingStatusService.getDeleteCourseStatus().subscribe(status => this.updateLoadingStatus(status, 'delete'));
    this.refresh();
  }

  updateLoadingStatus(status, attr) {
    this.loadingStatus[attr] = status;
    this.loadingStatus.all = Object.keys(this.loadingStatus).reduce((acc, cur) => {
      if (cur === 'all') return acc;
      else return acc || this.loadingStatus[cur];
    }, false)
  }

  refresh() {
    this.loadingStatusService.getCoursesStatus().next(true);
    this.coursesService
      .getItems(this.countOfCourses, this.filter)
      .subscribe(
        (data) => {
          this.loadingStatusService.getCoursesStatus().next(false);
          this.courseItems = data.map(({ id, name, date, length, description, isTopRated, authors }) => ({
            id: String(id),
            title: name,
            creationDate: date,
            description,
            duration: length,
            stared: isTopRated,
            authors
          }))
        }
      )
  }

  deleteCourse(courseId: string): void {
    if (!confirm("Do you really want to delete the course?")) return;
    this.coursesService
      .deleteItem(courseId)
      .subscribe(
        () => {
          this.refresh();
        }
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
