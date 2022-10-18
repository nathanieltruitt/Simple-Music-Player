import { Component } from '@angular/core';
import SpotifyPlayer from 'spotify-web-playback';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // isPlaying = false;
  // uri = 'spotify:track:54flyrjcdnQdco7300avMJ';
  // spotify = new SpotifyPlayer('Simple Music Player');
  // async playSong() {
  //   if (!this.isPlaying) {
  //     await this.spotify.connect(this.token);
  //     this.spotify.play(this.uri);
  //     this.isPlaying = true;
  //   } else {
  //     this.spotify.pause();
  //     this.isPlaying = false;
  //   }
  // }
}
