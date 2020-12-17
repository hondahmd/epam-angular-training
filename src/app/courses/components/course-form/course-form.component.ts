import { Component, OnInit } from '@angular/core';
import { BreadcrumbInterface } from '../../../shared/models/breadcrumb-interface';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CoursesService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //Param from path (:id)
    if (id) {
      this.service
        .getItemById(id)
        .subscribe(data => {
          this.model = data;
          this.breadcrumbs[1].text = 'Edit';
        })
    }
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
