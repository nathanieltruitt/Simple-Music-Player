import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import {
  map,
  Observable,
  of,
  ReplaySubject,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { Playlist } from 'src/app/models/playlist.interface';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService implements OnDestroy {
  // TODO: add firestore
  private _user!: User | null;
  private _playlists: Playlist[] = [];
  playlists$ = new ReplaySubject<Playlist[]>(1);
  savedPlaylistsSub!: Subscription;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.savedPlaylistsSub = this.authService.authenticatedUser
      .pipe(
        switchMap((user) => {
          this._user = user || null;
          if (!user) return of(null);
          return this.getPlaylists(user);
        })
      )
      .subscribe({
        next: (playlists) => {
          if (playlists !== null) {
            this._playlists = playlists.playlists;
            this.playlists$.next(this._playlists.slice());
          } else {
            return;
          }
        },
        error: (err) => console.log(err),
      });
  }

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

  getPlaylists(user: User) {
    return this.http.get<{ playlists: Playlist[] }>(
      `https://codelabs-cc55a-default-rtdb.firebaseio.com/playlists/${user.id}.json?auth=${user.token}`
    );
  }

  savePlaylists() {
    // return if the user id is undefined
    if (this._user?.id === undefined) return;
    this.http
      .put(
        `https://codelabs-cc55a-default-rtdb.firebaseio.com/playlists.json?auth=${this._user?.token}`,
        {
          [this._user?.id]: {
            playlists: this._playlists,
          },
        }
      )
      .subscribe((x) => console.log(x));
  }

  ngOnDestroy(): void {
    this.savedPlaylistsSub.unsubscribe();
  }
}
