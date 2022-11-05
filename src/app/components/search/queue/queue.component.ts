import { Component, OnDestroy, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/component-communication/queue.service';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { SelectedTrackService } from 'src/app/services/component-communication/selected-track.service';
import { WebPlayerService } from 'src/app/services/data-access/web-player.service';
import { Track } from 'src/app/models/track.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
})
export class QueueComponent implements OnInit, OnDestroy {
  // TODO: queue visibly displays the song being played
  currentTrackSub!: Subscription;
  currentTrack!: string;
  faPlay = faPlay;
  faPause = faPause;
  isPlaying = false;
  constructor(
    private queueService: QueueService,
    private selectedTrackService: SelectedTrackService,
    private webPlayerService: WebPlayerService
  ) {}

  ngOnInit(): void {
    this.currentTrackSub = this.webPlayerService.currentTrack.subscribe(
      (trackName) => {
        this.currentTrack = trackName;
      }
    );
  }

  getQueue() {
    return this.queueService.queue$;
  }

  removeItem(track: Track) {
    this.queueService.removeTrack(track, false);
  }

  playSong(track: Track) {
    if (this.currentTrack === track.name) {
      this.webPlayerService.togglePlay();
      this.isPlaying = false;
      return;
    }
    this.isPlaying = true;
    this.selectedTrackService.selectTrack(track);
    this.webPlayerService.addSong(track);
    this.currentTrack = track.name;
  }

  getCurrentTrack() {
    return this.currentTrack;
  }

  ngOnDestroy(): void {
    this.currentTrackSub.unsubscribe();
  }
}
