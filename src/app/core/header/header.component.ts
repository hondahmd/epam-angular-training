import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'courses-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  userName: string;

  showUser: boolean;

  ngOnInit(): void {
    this.authService.currentUserSubject.subscribe(
      (val) => {
        this.userName = val.name;
        this.showUser = val.token !== '';
      }
    )
  }

  logout(): void {
    console.log('logout');
    this.authService.logout();
  }

}
