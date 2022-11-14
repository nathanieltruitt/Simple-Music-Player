import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Track } from 'src/app/models/track.interface';

@Injectable({
  providedIn: 'root',
})
export class SelectedTrackService {
  // * this service is intended for accessing the currently selected track from the searcher component.
  // * it tells the app which song we are currently interested in
  private selected$ = new ReplaySubject<Track>(1);

  constructor() {}

  get selected() {
    return this.selected$.asObservable();
  }

  selectTrack(track: Track) {
    this.selected$.next(track);
  }
}
