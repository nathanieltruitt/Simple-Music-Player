import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/playlist.interface';
import { QueueService } from 'src/app/services/component-communication/queue.service';

@Component({
  selector: 'app-nav-playlist',
  templateUrl: './nav-playlist.component.html',
  styleUrls: ['./nav-playlist.component.css'],
})
export class NavPlaylistComponent implements OnInit {
  @Input() playlist!: Playlist;

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {}

  @HostListener('click') onClick() {
    this.queueService.clear();
    this.queueService.addTrackToQueue(this.playlist.tracks);
  }
}
