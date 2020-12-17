import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
