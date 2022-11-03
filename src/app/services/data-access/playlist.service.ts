import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { Playlist } from 'src/app/models/playlist.interface';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  // TODO: add firestore
  private _playlists: Playlist[] = [];
  playlists$ = new ReplaySubject<Playlist[]>(1);

  constructor() {}

  get playlists() {
    return this._playlists.slice();
  }

  setPlaylists(playlist: Playlist, idx: number | null) {
    if (typeof idx === 'number') {
      this._playlists[idx] = playlist;
    } else {
      this._playlists.push(playlist);
    }
    this.playlists$.next(this._playlists.slice());
  }

  deletePlaylist(idx: number) {
    this._playlists.splice(idx, 1);
    this.playlists$.next(this._playlists.slice());
  }
}
