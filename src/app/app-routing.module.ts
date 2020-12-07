import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { CoursesListComponent } from './courses/components/courses-list/courses-list.component';
import { CourseFormComponent } from './courses/components/course-form/course-form.component';
import { PageNotFoundComponent } from './auth/components/page-not-found/page-not-found.component';
import { GuardService } from './auth/services/guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: 'courses', component: CoursesListComponent },
      { path: 'courses/add', component: CourseFormComponent },
      { path: 'courses/:id/edit', component: CourseFormComponent },
    ],
    canActivate: [GuardService]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GuardService]
})
export class AppRoutingModule { }
