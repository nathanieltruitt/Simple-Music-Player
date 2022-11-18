import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faHouse,
  faList,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PlaylistService } from 'src/app/services/data-access/playlist.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  faList = faList;
  faHouse = faHouse;
  faRightFromBracket = faRightFromBracket;

  constructor(
    private authService: AuthService,
    private router: Router,
    private playlistService: PlaylistService
  ) {}

  ngOnInit(): void {}

  getPlaylists() {
    return this.playlistService.playlists$.asObservable();
  }

  onLogout() {
    localStorage.clear();
    this.authService.authenticatedUser.next(null);
    this.router.navigate(['/auth/login']);
  }
}
