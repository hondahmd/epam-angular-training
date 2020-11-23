import { Injectable } from '@angular/core';

import { UserInterface } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  private currentUser: UserInterface = null;

  login(user: UserInterface) {
    this.currentUser = user;
    console.log('Logged in successfully');
  }

  logout() {
    this.currentUser = null;
    console.log('logout');
  }

  isAuthenticated(): boolean {
    return !!(this.currentUser && this.currentUser.token);
  }

  getUserInfo(): UserInterface {
    return this.currentUser;
  }
}
