import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/data-access/spotify.service';

@Component({
  templateUrl: './spotify-auth.component.html',
  styleUrls: ['./spotify-auth.component.css'],
})
export class SpotifyAuthComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.spotifyService.login();
  }
}
