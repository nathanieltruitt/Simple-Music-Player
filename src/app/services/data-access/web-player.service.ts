import { Injectable } from '@angular/core';
import SpotifyPlayer, { SpotifyPlayerStatus } from 'spotify-web-playback';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from 'src/app/spotifyHttpOptions';

@Injectable({
  providedIn: 'root',
})
export class WebPlayerService {
  private _playerStatus!: SpotifyPlayerStatus | null;
  private baseUrl = 'https://api.spotify.com/v1/me/';
  private spotify = new SpotifyPlayer('Simple Music Player');
  // * uses the web player API provided by spotify to play songs in the browser.

  constructor(private http: HttpClient) {
    this.spotify.connect(environment.accessToken);
  }

  togglePlay() {
    if (this.spotify.playing) {
      this.spotify.pause();
    } else {
    }
  }

  addSong(track: any) {
    // TODO: get player API call to work
    this.http.post(
      `${this.baseUrl}player/queue?uri="${track.uri}"`,
      httpOptions
    );
    this.spotify.getPlaybackState().then((status) => {
      this._playerStatus = status;
    });
  }

  get playerStatus(): SpotifyPlayerStatus | null {
    return this._playerStatus;
  }
}
