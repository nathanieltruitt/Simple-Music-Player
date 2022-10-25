import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistComponent implements OnInit {
  @Input() tracks!: any[];
  @Input() name!: string;
  @Input() description!: string;
  @Output() onDetailsEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  previewImages(): any[] {
    let previewTracks: any[];
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
