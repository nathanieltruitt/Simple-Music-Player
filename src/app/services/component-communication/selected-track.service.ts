import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedTrackService {
  // * this service is intended for accessing the currently selected track from the searcher component.
  private selected$ = new Subject<any>();

  constructor() {}

  get selected() {
    return this.selected$.asObservable();
  }

  selectTrack(track: object) {
    // runs when user selects track from song searcher
    this.selected$.next(track);
  }
}
