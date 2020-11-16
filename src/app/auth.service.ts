import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  currentUser: User = {
    id: '',
    name: '',
    password: '',
    token: ''
  }

  currentUserSubject: Subject<User> = new Subject<User>();

  login(info) {
    this.currentUser = info;
    this.currentUserSubject.next(info);
  }

  logout() {
    const cleanUser = {
      id: '',
      name: '',
      password: '',
      token: ''
    };
    this.currentUser = cleanUser;
    this.currentUserSubject.next(cleanUser)
  }

  isAuthenticated(): boolean {
    return this.currentUser.token !== undefined && this.currentUser.token !== '';
  }

  getUserInfo(): User {
    return this.currentUser;
  }
}
