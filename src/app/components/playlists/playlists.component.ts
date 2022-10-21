import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/data-access/playlist.service';

@Component({
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
})
export class PlaylistsComponent implements OnInit {
  constructor(
    private router: Router,
    private playlistService: PlaylistService
  ) {}

  ngOnInit(): void {
    this.getPlaylists().subscribe((x) => console.log(x));
  }

  onNewPlaylist() {
    this.router.navigate(['/playlists/detail/new']);
  }

  getPlaylists() {
    return this.playlistService.playlists$;
  }
}
