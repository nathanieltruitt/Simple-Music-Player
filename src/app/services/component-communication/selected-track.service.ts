import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Track } from 'src/app/models/track.interface';

@Injectable({
  providedIn: 'root',
})
export class SelectedTrackService {
  // * this service is intended for accessing the currently selected track from the searcher component.
  private selected$ = new Subject<Track>();

  constructor() {}

  get selected() {
    return this.selected$.asObservable();
  }

  selectTrack(track: Track) {
    // runs when user selects track from song searcher
    this.selected$.next(track);
  }
}
