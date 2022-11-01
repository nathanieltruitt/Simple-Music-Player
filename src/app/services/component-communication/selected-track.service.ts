import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Track } from 'src/app/models/track.interface';
import { WebPlayerService } from '../data-access/web-player.service';

@Injectable({
  providedIn: 'root',
})
export class SelectedTrackService {
  // * this service is intended for accessing the currently selected track from the searcher component.
  private selected$ = new Subject<Track>();

  constructor(private webPlayerService: WebPlayerService) {}

  get selected() {
    return this.selected$.asObservable();
  }

  selectTrack(track: Track) {
    // runs when user selects track from song searcher
    // this.webPlayerService.addSong(track);
    this.selected$.next(track);
  }
}
