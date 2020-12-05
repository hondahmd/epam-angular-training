import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';
import { BorderDirective } from './directives/border/border.directive';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CourseFormComponent} from './components/course-form/course-form.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    SearchComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    BorderDirective,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class CoursesModule { }
