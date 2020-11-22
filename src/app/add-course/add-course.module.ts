import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddCoursePageComponent } from './page/page.component';
import { AddCourseTitleComponent } from './add-course-title/add-course-title.component';
import { AddCourseDescriptionComponent } from './add-course-description/add-course-description.component';
import { AddCourseDurationComponent } from './add-course-duration/add-course-duration.component';
import { AddCourseDateComponent } from './add-course-date/add-course-date.component';
import { AddCourseAuthorsComponent } from './add-course-authors/add-course-authors.component';
import { AddCourseButtonsComponent } from './add-course-buttons/add-course-buttons.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    AddCoursePageComponent,
    AddCourseTitleComponent,
    AddCourseDescriptionComponent,
    AddCourseDurationComponent,
    AddCourseDateComponent,
    AddCourseAuthorsComponent,
    AddCourseButtonsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
  ]
})
export class AddCourseModule { }
