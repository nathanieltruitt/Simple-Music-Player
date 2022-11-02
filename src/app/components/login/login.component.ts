import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/data-access/spotify.service';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.spotifyService.login();
  }
}
