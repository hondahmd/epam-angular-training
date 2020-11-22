import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CourseSectionComponent } from './course-section/course-section.component';
import { OrderByPipe } from './courses-list/order-by.pipe';
import { FilterPipe } from './search/filter.pipe';
import { BorderDirective } from './courses-list-item/border.directive';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    CoursesComponent,
    SearchComponent,
    AddCourseComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    CourseSectionComponent,
    OrderByPipe,
    FilterPipe,
    BorderDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
