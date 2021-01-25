import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoadingStatusService } from '../../../shared/services/loading-status.service';
import { BreadcrumbInterface } from '../../../shared/models/breadcrumb-interface';
import { BECoursesInterface, CourseInterface } from '../../models/course-interface';
import { CoursesService } from '../../services/courses.service';

@Component({
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  breadcrumbs: BreadcrumbInterface[] = [
    { text: 'Courses', routerLink: '/courses' },
    { text: 'New' }
  ];

  model: CourseInterface = {
    id: null,
    title: '',
    creationDate: '',
    duration: null,
    description: '',
    stared: false,
    authors: {
      id: null,
      name: '',
    }
  };

  loadingStatus = {
    all: false,
    courseById: false,
    edit: false,
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CoursesService,
    private loadingStatusService: LoadingStatusService,
  ) { }

  ngOnInit(): void {
    this.loadingStatusService.getCourseByIdStatus().subscribe((status) => this.updateLoadingStatus(status, 'courseById'));
    this.loadingStatusService.getEditCourseStatus().subscribe((status) => this.updateLoadingStatus(status, 'edit'));

    const id = this.route.snapshot.paramMap.get('id'); //Param from path (:id)
    if (id) {
      this.loadingStatusService.getCourseByIdStatus().next(true);
      this.service
        .getItemById(id)
        .subscribe(data => {
          this.model = data;
          this.breadcrumbs[1].text = 'Edit';
          this.loadingStatusService.getCourseByIdStatus().next(false);
        })
    }
  }

  updateLoadingStatus(status, attr) {
    this.loadingStatus[attr] = status;
    this.loadingStatus.all = Object.keys(this.loadingStatus).reduce((acc, cur) => {
      if (cur === 'all') return acc;
      else return acc || this.loadingStatus[cur];
    }, false)
  }

  handleCancel() {
    this.gotoCourses();
  }

  handleSave() {
    if (this.model.id) {
      this.service
        .updateItem(this.model)
        .subscribe(
          () => this.gotoCourses(),
          (error) => alert(error.message || 'Error'),
        );
    } else {
      this.service
        .createItem(this.model)
        .subscribe(
          () => this.gotoCourses(),
          (error) => alert(error.message || 'Error'),
        );
    }
  }

  private gotoCourses() {
    this.router.navigate(['/courses']);
  }
}
