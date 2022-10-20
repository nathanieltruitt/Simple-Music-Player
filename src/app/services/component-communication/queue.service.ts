import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  // * tracks will be loaded into the queue array
  queue: any[] = [];
  queue$ = new Subject<any[]>();

  constructor() {}

  addTrackToQueue(track: any) {
    this.queue.push(track);
    this.queue$.next(this.queue.slice());
  }

  removeTrack(idx: number) {
    this.queue.splice(idx)
    this.queue$.next(this.queue.slice())
  }
}
