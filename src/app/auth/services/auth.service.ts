import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UserInterface, BEUserInterface } from '../models/user-interface';
import { LoginInterface } from '../models/login-interface';
import { TokenInterface } from '../models/token-interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private currentUser: UserInterface = null;

  login(user: LoginInterface): Observable<TokenInterface> {
    return this.http.post<TokenInterface>(environment.apiUrl + '/auth/login', user);
  }

  logout() {
    this.currentUser = null;
    console.log('logout');
  }

  isAuthenticated(): boolean {
    return !!(this.currentUser && this.currentUser.token);
  }

  fetchUserInfo(token): Observable<BEUserInterface> {
    return this.http.post<BEUserInterface>(environment.apiUrl + '/auth/userinfo', { token });
  }

  setUserInfo(user: UserInterface) {
    this.currentUser = user;
  }

  getUserInfo(): UserInterface {
    return this.currentUser;
  }
}
