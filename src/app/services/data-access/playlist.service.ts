import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Playlist } from 'src/app/models/playlist.interface';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private _playlists: Playlist[] = [];
  playlists$ = new Subject<Playlist[]>();

  constructor() {}

  get playlists() {
    return this._playlists.slice();
  }

  setPlaylists(playlist: Playlist) {
    this._playlists.push(playlist);
    this.playlists$.next(this._playlists.slice());
  }
}
