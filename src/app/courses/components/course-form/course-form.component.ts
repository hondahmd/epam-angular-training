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
        .subscribe(({ id, name, date, length, description, isTopRated, authors }) => {
          this.model = {
            id: String(id),
            title: name,
            creationDate: date,
            description,
            duration: length,
            stared: isTopRated,
            authors
          };
          this.breadcrumbs[1].text = 'Edit';
        })
    }
  }

  handleCancel() {
    this.gotoCourses();
  }

  handleSave() {
    const { id, title, creationDate, duration, description, stared, authors } = this.model;
    const newCourseInfo: BECoursesInterface = {
      id: Number(id),
      name: title,
      date: creationDate,
      length: duration,
      description,
      isTopRated: stared,
      authors,
    };
    if (id) {
      this.service
        .updateItem(newCourseInfo)
        .subscribe(
          () => this.gotoCourses(),
          (error) => alert(error.message || 'Error'),
        );
    } else {
      this.service
        .createItem(newCourseInfo)
        .subscribe(
          () => this.gotoCourses(),
          (error) => alert(error.message || 'Error'),
        );
    }
    this.gotoCourses();
  }

  private gotoCourses() {
    this.router.navigate(['/courses']);
  }
}
