import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import {RouterModule} from '@angular/router';
import {DurationPipe} from './pipes/duration.pipe';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    DurationPipe,
    LoadingBlockComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    DurationPipe,
    LoadingBlockComponent,
  ]
})
export class SharedModule { }
