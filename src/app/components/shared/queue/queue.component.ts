import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/component-communication/queue.service';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { SelectedTrackService } from 'src/app/services/component-communication/selected-track.service';
import { WebPlayerService } from 'src/app/services/data-access/web-player.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
})
export class QueueComponent implements OnInit {
  // TODO: queue visibly displays the song being played
  faPlay = faPlay;
  faPause = faPause;
  isPlaying = false;
  constructor(
    private queueService: QueueService,
    private selectedTrackService: SelectedTrackService,
    private webPlayerService: WebPlayerService
  ) {}

  ngOnInit(): void {}

  getQueue() {
    return this.queueService.queue$;
  }

  removeItem(idx: number) {
    this.queueService.removeTrack(idx);
  }

  playSong(track: any) {
    this.isPlaying = true;
    this.selectedTrackService.selectTrack(track);
    this.webPlayerService.addSong(track);
    this.webPlayerService.currentTrack = track.name;
  }

  getCurrentTrack() {
    return this.webPlayerService.currentTrack;
  }
}
