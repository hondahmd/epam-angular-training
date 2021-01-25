import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent,
  ]
})
export class CoreModule { }
