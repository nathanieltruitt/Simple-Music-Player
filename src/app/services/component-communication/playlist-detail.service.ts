import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Track } from 'src/app/models/track.interface';
import { PlaylistService } from '../data-access/playlist.service';
import { WebPlayerService } from '../data-access/web-player.service';
import { QueueService } from './queue.service';
import { SelectedTrackService } from './selected-track.service';

@Injectable({
  providedIn: 'root',
})
export class PlaylistDetailService {
  constructor(
    private queueService: QueueService,
    private webPlayerService: WebPlayerService,
    private selectedTrackService: SelectedTrackService,
    private playlistService: PlaylistService
  ) {}

  queueTrack(track: Track) {
    this.queueService.addTrackToQueue(track);
  }

  playTrack(track: Track) {
    this.selectedTrackService.selectTrack(track);
    this.webPlayerService.addSong(track);
  }

  checkPlaylists(name: string) {
    // check to see if the playlists array contains the name.
    const sameName = this.playlistService.playlists.filter(
      (playlist) => name == playlist.name
    );
    if (sameName.length > 0) return true;
    else return false;
  }

  forbiddenNameValidator(exists: boolean): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (exists) return null;
      return this.checkPlaylists(control.value)
        ? { forbiddenName: { value: control.value } }
        : null;
    };
  }
}
