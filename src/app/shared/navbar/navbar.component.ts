import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() user: any;
  constructor(private accountService: AccountService, private router: Router) { }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/account/login']);
  }
}
