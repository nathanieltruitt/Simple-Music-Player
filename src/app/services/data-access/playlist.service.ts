import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Playlist } from 'src/app/models/playlist.interface';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private playlists: Playlist[] = [];
  playlists$ = new Subject<Playlist[]>();

  constructor() {}

  setPlaylists(playlist: Playlist) {
    this.playlists.push(playlist);
    this.playlists$.next(this.playlists.slice());
  }
}
