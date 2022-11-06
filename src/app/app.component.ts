import { Component, OnInit } from '@angular/core';
import SpotifyPlayer from 'spotify-web-playback';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  get isAuth() {
    return this.authService.authenticatedUser;
  }
}
