import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SelectedTrackService } from 'src/app/services/component-communication/selected-track.service';
import { WebPlayerService } from 'src/app/services/data-access/web-player.service';
import { faPlay, faForward, faPause } from '@fortawesome/free-solid-svg-icons';
import { Track } from 'src/app/models/track.interface';
import { QueueService } from 'src/app/services/component-communication/queue.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  result$!: Observable<Track>;
  errorMessage!: string;
  faPlay = faPlay;
  faPause = faPause;
  faForward = faForward;
  constructor(
    private selectedTrackService: SelectedTrackService,
    private webPlayerService: WebPlayerService,
    private queueService: QueueService
  ) {}

  ngOnInit(): void {
    this.result$ = this.selectedTrackService.selected;
  }

  // TODO: need model for artist
  getArtistString(artists: any[]) {
    let artistStr;
    if (artists.length === 1) {
      artistStr = artists[0].name;
      return artistStr;
    } else {
      artistStr = '';
    }

    for (let artist of artists) {
      artistStr += `${artist.name}, `;
    }
    return artistStr;
  }

  setErrorMessage(message: string) {
    this.errorMessage = message;
  }

  toggleSong() {
    this.webPlayerService.togglePlay();
  }

  onReverseTrack(track: Track) {
    this.queueService.move(track, false);
  }

  onForwardTrack(track: Track) {
    this.queueService.move(track, true);
  }

  get playerStatus(): boolean {
    return this.webPlayerService.playerStatus;
  }
}
