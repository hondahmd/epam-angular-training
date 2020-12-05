import { Component, OnInit } from '@angular/core';
import {BreadcrumbInterface} from '../../../shared/models/breadcrumb-interface';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseInterface} from '../../models/course-interface';
import {CoursesService} from '../../services/courses.service';

@Component({
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  breadcrumbs: BreadcrumbInterface[];

  loading = false;

  error: string;

  model: CourseInterface = {
    id: null,
    name: '',
    date: '',
    length: null,
    description: '',
    isTopRated: false,
    authors: null,
  };

  get title(): string {
    return this.model.id ? 'Edit Course' : 'New Course';
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CoursesService,
  ) { }

  ngOnInit(): void {
    this.updateBreadcrumbs();
    const id = +this.route.snapshot.paramMap.get('id'); //Param from path (:id)
    if (id) {
      this.load(id);
    }
  }

  private load(id: number) {
    this.error = null;
    this.loading = true;
    this.service
      .getItemById(id)
      .subscribe(
        data => {
          this.loading = false;
          this.model = data;
          this.updateBreadcrumbs();
        },
        error => {
          this.loading = false;
          this.error = error?.message || 'Error';
        }
      );
  }

  private updateBreadcrumbs() {
    this.breadcrumbs = [
      {text: 'Courses', routerLink: '/courses'},
      {text: this.title}
    ];
  }

  handleCancel() {
    this.gotoCourses();
  }

  handleSave() {
    let obs = this.model.id
      ? this.service.updateItem(this.model)
      : this.service.createItem(this.model);

    this.error = null;
    this.loading = true;
    obs
      .subscribe(
        data => {
          this.loading = false;

          this.model = data; //New value
          this.updateBreadcrumbs(); //Is editing now
          this.gotoCourses(); //Or you can stay on the this page. This case is correctly also.
        },
        error => {
          this.loading = false;
          this.error = error?.message || 'Error';
        }
      );
  }

  private gotoCourses() {
    this.router.navigate(['/courses']);
  }
}
