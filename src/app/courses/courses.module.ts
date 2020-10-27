import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CourseSectionComponent } from './course-section/course-section.component';



@NgModule({
  declarations: [
    CoursesComponent,
    SearchComponent,
    AddCourseComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    CourseSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
