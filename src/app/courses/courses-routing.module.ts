import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesListComponent} from './components/courses-list/courses-list.component';
import {CourseFormComponent} from './components/course-form/course-form.component';

const routes: Routes = [
  { path: '', component: CoursesListComponent },
  { path: 'add', component: CourseFormComponent },
  { path: ':id/edit', component: CourseFormComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class CoursesRoutingModule {
}
