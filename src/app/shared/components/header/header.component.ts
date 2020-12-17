import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import {UserInterface} from '../../../auth/models/user-interface';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() text: string;

  currentUser: UserInterface;

  private subs: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getUserInfo();
  }

  logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy(): void {
    // You must unsubscribe from all subscriptions
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
  }
}
