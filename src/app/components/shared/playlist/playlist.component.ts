import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Track } from 'src/app/models/track.interface';
import { QueueService } from 'src/app/services/component-communication/queue.service';

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

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {}

  previewImages(): Track[] {
    // * Creates the preview images on the card. If 4 songs have been added to the playlist will display
    // * one otherwise it displays 1 image.
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

  onQueue() {
    this.queueService.addTrackToQueue(this.tracks);
  }
}
