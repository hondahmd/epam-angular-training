import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'courses-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  userName: string;

  password: string;

  ngOnInit(): void {
  }

  handleInput(event): void {
    console.log(event.target.value);
    this[event.target.id] = event.target.value;
  }

  handleLogin(): void {
    this.authService.login({
      name: this.userName,
      password: this.password,
      id: '111',
      token: '111',
    })
    console.log('loged in successfully');
  }

}
