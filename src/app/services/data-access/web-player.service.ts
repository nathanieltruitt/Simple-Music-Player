import { Injectable } from '@angular/core';
import spotifyPlayer from 'spotify-web-playback';
import { Track } from 'src/app/models/track.interface';

@Injectable({
  providedIn: 'root',
})
export class WebPlayerService {
  // private baseUrl = 'https://api.spotify.com/v1/me/';
  currentTrack!: string;
  private _spotify = new spotifyPlayer('Simple Music Player');
  // * uses the web player API provided by _spotify to play songs in the browser.

  constructor() {
    let auth = localStorage.getItem('spotify_auth') || '';
    if (auth) {
      this._spotify.connect(JSON.parse(auth)['access_token']);
    }
  }

  togglePlay() {
    if (this._spotify.playing) {
      this._spotify.pause();
    } else {
      this._spotify.play();
    }
  }

  addSong(track: Track) {
    this._spotify.play(track.uri);
  }

  get playerStatus(): boolean {
    return this._spotify.playing;
  }
}
