import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QueueService } from 'src/app/services/component-communication/queue.service';
import { SelectedTrackService } from 'src/app/services/component-communication/selected-track.service';
import { WebPlayerService } from 'src/app/services/data-access/web-player.service';
import { faPlay, faForward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-result-info',
  templateUrl: './result-info.component.html',
  styleUrls: ['./result-info.component.css'],
})
export class ResultInfoComponent implements OnInit {
  result$!: Observable<any>;
  errorMessage!: string;
  faPlay = faPlay;
  faForward = faForward;
  constructor(
    private selectedTrackService: SelectedTrackService,
    private queueService: QueueService,
    private webPlayerService: WebPlayerService
  ) {}

  ngOnInit(): void {
    this.result$ = this.selectedTrackService.selected;
  }

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

  addToQueue(track: any) {
    // this.webPlayerService.addSong(track)
    this.queueService.addTrackToQueue(track);
  }

  setErrorMessage(message: string) {
    this.errorMessage = message;
  }

  playSong(track: any) {
    this.webPlayerService.addSong(track);
  }

  test() {
    console.log(this.webPlayerService.playerStatus);
  }
}
