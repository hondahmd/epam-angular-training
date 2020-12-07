import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
})
export class AuthModule { }
