import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist } from 'src/app/models/playlist.interface';
import { PlaylistService } from 'src/app/services/data-access/playlist.service';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
})
export class PlaylistsComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) {}

  ngOnInit(): void {}

  onNewPlaylist(): void {
    this.router.navigate(['/playlists/detail/new']);
  }

  getPlaylists(): Subject<Playlist[]> {
    return this.playlistService.playlists$;
  }

  openPlaylist(idx: number): void {
    this.router.navigate([`detail/${idx}`], { relativeTo: this.route });
  }

  onSavePlaylists() {
    this.playlistService.savePlaylists();
  }
}
