import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from './_services';
import { User } from './_models';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent
  ],
})
export class AppComponent implements OnInit {
  title = 'Sprint7_StarWars';

  user?: User | null;
  userFirstName: string | null = null;

  constructor(private accountService: AccountService, private router: Router) {
    this.accountService.user.subscribe(user => {
      this.user = user;
      this.userFirstName = user?.firstName || null;
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/account/login']);
  }

  toggleLogin() {
    if (this.user) {
      this.logout();
    } else {
      this.router.navigate(['/account/login']);
    }
  }

  getUserName(): string | null {
    return this.userFirstName;
  }

ngOnInit(): void {

}

}
