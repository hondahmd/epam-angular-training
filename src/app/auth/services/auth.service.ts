import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UserInterface, BEUserInterface } from '../models/user-interface';
import { LoginInterface } from '../models/login-interface';
import { TokenInterface } from '../models/token-interface';
import { environment } from '../../../environments/environment';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
    const data = localStorage.getItem('user');
    if (data) {
      this.currentUser = JSON.parse(data); //Restore from browser storage
    }
  }

  private currentUser: UserInterface = null;

  login(user: LoginInterface): Observable<void> {
    return this.http
      .post<TokenInterface>(environment.apiUrl + '/auth/login', user)
      .pipe(
        switchMap(data => this.fetchUserInfo(data.token)), //switch stream to next request (synchronously)
        map(data => {
          //The second request is executed. Let's process the result
          //data is BEUserInterface here
          const { id, name, fakeToken, password } = data;
          this.setUserInfo({
            id: String(id),
            password,
            token: fakeToken,
            name: `${name.first} ${name.last}`
          });
          //Nothing to return
        })
      );
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user'); //Remove from browser storage
    console.log('logout');
  }

  isAuthenticated(): boolean {
    return !!(this.currentUser && this.currentUser.token);
  }

  fetchUserInfo(token: string): Observable<BEUserInterface> {
    return this.http.post<BEUserInterface>(environment.apiUrl + '/auth/userinfo', { token });
  }

  setUserInfo(user: UserInterface) {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user)); //Store to browser storage
  }

  getUserInfo(): UserInterface {
    return this.currentUser;
  }
}
