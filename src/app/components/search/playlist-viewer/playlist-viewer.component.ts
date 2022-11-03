import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/data-access/playlist.service';

@Component({
  selector: 'app-playlist-viewer',
  templateUrl: './playlist-viewer.component.html',
  styleUrls: ['./playlist-viewer.component.css'],
})
export class PlaylistViewerComponent implements OnInit {
  constructor(
    private playlistService: PlaylistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  getPlaylists() {
    return this.playlistService.playlists$;
  }

  openPlaylist(idx: number) {
    this.router.navigate([`/playlists/detail/${idx}`], {
      relativeTo: this.route,
    });
  }
}
