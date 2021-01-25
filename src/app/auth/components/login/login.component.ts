import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingStatusService } from '../../../shared/services/loading-status.service';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingStatusService: LoadingStatusService,
  ) { }

  userName: string;

  password: string;

  loadingStatus: boolean = false;

  ngOnInit(): void {
    this.loadingStatusService.getLoginStatus()
      .subscribe(status => {
        this.loadingStatus = status || false;
      })
  }

  handleLogin(): void {
    const updateUserData = (data) => {
      const { id, name, fakeToken, password } = data;
      this.authService.setUserInfo({
        id: String(id),
        password,
        token: fakeToken,
        name: `${name.first} ${name.last}`
      })
      this.loadingStatusService.getLoginStatus().next(false);
      this.router.navigate(['/']);
    }

    const fetchUserInfo = (data) => {
      this.authService
        .fetchUserInfo(data.token)
        .subscribe(updateUserData)
    }

    this.loadingStatusService.getLoginStatus().next(true);
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
