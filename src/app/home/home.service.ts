import { Injectable } from '@angular/core';
import { UserData } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getItems(): UserData {
    return {
      id: '111',
      firstName: 'Honda',
      lastName: 'Hong'
    };
  }
}
