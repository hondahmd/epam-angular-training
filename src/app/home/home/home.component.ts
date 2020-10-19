import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { UserData } from '../user-model';

@Component({
  selector: 'courses-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userData: UserData = {
    id: '',
    firstName: '',
    lastName: ''
  };

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.userData = this.homeService.getItems();
  }

}
