import { Injectable } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { Track } from 'src/app/models/track.interface';
import { WebPlayerService } from '../data-access/web-player.service';
import { SelectedTrackService } from './selected-track.service';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  // * tracks will be loaded into the queue array
  private _queue: Track[] = [];
  queue$ = new ReplaySubject<Track[]>(1);

  constructor(
    private webPlayerService: WebPlayerService,
    private selectedTrackService: SelectedTrackService
  ) {}

  addTrackToQueue(track: Track | Track[]) {
    if (Array.isArray(track)) {
      this._queue = [...this._queue, ...track];
    } else {
      this._queue.push(track);
    }
    this.queue$.next(this._queue.slice());
  }

  removeTrack(track: Track, playNext: boolean) {
    const idxNum = this._queue.indexOf(track);
    // * Play the next song if this value is true
    if (playNext && this._queue.length > 1) {
      const nextSong = this._queue[idxNum + 1];
      // FIXME: not playing next song
      this.selectedTrackService.selectTrack(nextSong);
      this.webPlayerService.addSong(nextSong);
    }
    this._queue.splice(idxNum, 1);
    this.queue$.next(this._queue.slice());
  }

  move(track: Track, isForward: boolean) {
    if (this._queue.length > 1) {
      let changedTrack;
      const idxNum = this._queue.indexOf(track);
      isForward
        ? (changedTrack = this._queue[idxNum + 1])
        : (changedTrack = this._queue[idxNum - 1]);
      this.selectedTrackService.selectTrack(changedTrack);
      this.webPlayerService.currentTrack.next(changedTrack.name);
      this.webPlayerService.addSong(changedTrack);
    }
  }

  get queue() {
    return this._queue.slice();
  }
}
