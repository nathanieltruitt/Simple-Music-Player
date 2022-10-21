import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  @Input() tracks!: any[];
  @Input() name!: string;
  @Input() description!: string;

  constructor() {}

  ngOnInit(): void {}

  previewImages(): any[] {
    let previewTracks: any[];
    if (this.tracks.length >= 4) {
      previewTracks = this.tracks.slice(0, 3);
    } else {
      previewTracks = this.tracks.slice(0, 0);
    }
    return previewTracks;
  }
}
