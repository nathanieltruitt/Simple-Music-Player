import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/playlist.interface';

@Component({
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
})
export class PlaylistsComponent implements OnInit {
  showModal = false;
  playlists!: Playlist[];

  constructor() {}

  ngOnInit(): void {}
}
