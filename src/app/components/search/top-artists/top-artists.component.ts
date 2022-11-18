import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaylistService } from 'src/app/services/data-access/playlist.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css'],
})
export class TopArtistsComponent implements OnInit {
  playlistSub!: Subscription;
  // TODO: need model for artists
  artists: any[] = [];

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.playlistSub = this.playlistService.playlists$.subscribe({
      next: (playlists) => {
        for (let playlist of playlists) {
          for (let track of playlist.tracks) {
            this.artists = [...this.artists, ...track.artists];
          }
        }
        console.log(this.artists);
      },
    });
  }
}
