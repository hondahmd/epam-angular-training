import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingStatusService {
  loginStatus: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  getLoginStatus() {
    return this.loginStatus;
  }
}
