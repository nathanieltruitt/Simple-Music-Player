import { Component, OnInit } from '@angular/core';
import {
  faHouse,
  faList,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  faList = faList;
  faHouse = faHouse;
  faRightFromBracket = faRightFromBracket;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogout() {
    localStorage.clear();
    this.authService.authenticatedUser.next(null);
  }
}
