import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Track } from 'src/app/models/track.interface';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistComponent implements OnInit {
  @Input() tracks!: Track[];
  @Input() name!: string;
  @Input() description!: string;
  @Output() onDetailsEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  previewImages(): Track[] {
    let previewTracks: Track[];
    if (this.tracks.length >= 4) {
      previewTracks = this.tracks.slice(0, 4);
    } else {
      previewTracks = this.tracks.slice(0, 1);
    }
    return previewTracks;
  }

  onClick() {
    this.onDetailsEvent.emit();
  }
}
