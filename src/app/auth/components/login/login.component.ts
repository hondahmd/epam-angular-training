import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  userName: string;

  password: string;

  ngOnInit(): void {
  }

  handleLogin(): void {
    this.authService
      .login({
        login: this.userName,
        password: this.password,
      })
      .subscribe(
        () => this.router.navigate(['/']),
        (error) => alert(error.message || 'Error')
      );
  }
}
