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
  breadcrumbs: BreadcrumbInterface[] = [
    {text: 'Courses', routerLink: '/courses'},
    {text: 'New'}
  ];

  model: CourseInterface = {
    id: null,
    title: '',
    creationDate: '',
    duration: null,
    description: '',
    stared: false,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CoursesService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //Param from path (:id)
    if (id) {
      const model = this.service.getItemById(id);
      if (model) {
        //Edit mode
        this.model = {...model}; // Clone so as not to change the data in the service
        this.breadcrumbs[1].text = 'Edit';
      }
    }
  }

  handleCancel() {
    this.gotoCourses();
  }

  handleSave() {
    const data = {...this.model};
    if (data.id) {
      this.service.updateItem(data);
    } else {
      this.service.createItem(data);
    }
    this.gotoCourses();
  }

  private gotoCourses() {
    this.router.navigate(['/courses']);
  }
}
