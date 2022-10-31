import { Injectable } from '@angular/core';
import spotifyPlayer from 'spotify-web-playback';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebPlayerService {
  // private baseUrl = 'https://api.spotify.com/v1/me/';
  currentTrack!: string;
  private _spotify = new spotifyPlayer('Simple Music Player');
  // * uses the web player API provided by _spotify to play songs in the browser.

  constructor(private http: HttpClient) {
    this._spotify.connect(environment.accessToken);
  }

  togglePlay() {
    if (this._spotify.playing) {
      this._spotify.pause();
    } else {
    }
  }

  addSong(track: any) {
    // TODO: get player API call to work
    this._spotify.play(track.uri);
  }

  get playerStatus(): boolean {
    return this._spotify.playing;
  }
}
