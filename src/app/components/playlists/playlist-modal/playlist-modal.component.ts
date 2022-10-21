import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectedTrackService } from 'src/app/services/component-communication/selected-track.service';
import { PlaylistService } from 'src/app/services/data-access/playlist.service';

@Component({
  selector: 'app-playlist-modal',
  templateUrl: './playlist-modal.component.html',
  styleUrls: ['./playlist-modal.component.css'],
})
export class PlaylistModalComponent implements OnInit {
  selectedTrackSub!: Subscription;
  routeSub!: Subscription;
  playlistForm!: FormGroup;
  tracks: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private selectedTrackService: SelectedTrackService,
    private playlistService: PlaylistService
  ) {}

  ngOnInit(): void {
    this.selectedTrackSub = this.selectedTrackService.selected.subscribe(
      (track) => {
        this.tracks.push(track);
      }
    );

    this.playlistForm = this.fb.group({
      name: [''],
      description: [''],
    });

    this.routeSub = this.route.params.subscribe((params) => {
      const playlist =
        params['id'] !== 'new'
          ? this.playlistService.playlists[params['id']]
          : null;
      if (!playlist) return;

      this.playlistForm.setValue({
        name: playlist.name,
        description: playlist.description,
      });
      this.tracks = playlist.tracks;
    });
  }

  onSave() {
    this.playlistService.setPlaylists({
      name: this.playlistForm.get('name')?.value,
      description: this.playlistForm.get('description')?.value,
      tracks: this.tracks,
    });
  }

  onClose() {
    this.router.navigate(['/playlists']);
  }

  ngOnDestroy() {
    this.selectedTrackSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}