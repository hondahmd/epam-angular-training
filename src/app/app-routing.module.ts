import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import {LoginComponent} from './auth/components/login/login.component';
import {CoursesListComponent} from './courses/components/courses-list/courses-list.component';
import {CourseFormComponent} from './courses/components/course-form/course-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'courses', pathMatch: 'full'},
      { path: 'courses', component: CoursesListComponent },
      { path: 'courses/add', component: CourseFormComponent },
      { path: 'courses/:id/edit', component: CourseFormComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
