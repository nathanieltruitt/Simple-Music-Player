import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Track } from 'src/app/models/track.interface';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  // * tracks will be loaded into the queue array
  queue: Track[] = [];
  queue$ = new Subject<Track[]>();

  constructor() {}

  addTrackToQueue(track: Track) {
    this.queue.push(track);
    this.queue$.next(this.queue.slice());
  }

  removeTrack(idx: number) {
    this.queue.splice(idx);
    this.queue$.next(this.queue.slice());
  }
}
