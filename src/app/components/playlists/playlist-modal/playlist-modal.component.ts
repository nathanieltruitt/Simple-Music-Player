import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectedTrackService } from 'src/app/services/component-communication/selected-track.service';
import { PlaylistService } from 'src/app/services/data-access/playlist.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

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
  faTrashCan = faTrashCan;
  playlistId!: number;
  lastNum!: number;
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
      name: ['', [Validators.required]],
      description: ['', Validators.required],
    });

    this.routeSub = this.route.params.subscribe((params) => {
      const playlist =
        params['id'] !== 'new'
          ? this.playlistService.playlists[params['id']]
          : null;
      if (!playlist) {
        this.playlistForm
          .get('name')
          ?.addValidators(
            this.playlistService.forbiddenNameValidator(
              this.playlistId !== undefined
            )
          );
        return;
      }
      this.playlistId = Number(params['id']);

      this.playlistForm.setValue({
        name: playlist.name,
        description: playlist.description,
      });
      this.tracks = playlist.tracks;
      this.playlistForm
        .get('name')
        ?.addValidators(
          this.playlistService.forbiddenNameValidator(
            this.playlistId !== undefined
          )
        );
    });
  }

  onSave() {
    this.playlistService.setPlaylists(
      {
        name: this.playlistForm.get('name')?.value,
        description: this.playlistForm.get('description')?.value,
        tracks: this.tracks,
      },
      this.playlistId
    );
    this.router.navigate(['/playlists']);
  }

  onClose() {
    this.router.navigate(['/playlists']);
  }

  onDelete() {
    this.playlistService.deletePlaylist(this.playlistId);
    this.router.navigate(['/playlists']);
  }

  onDeleteTrack(idx: number) {
    this.tracks.splice(idx, 1);
  }

  onCheckPlaylists(playlist: string): boolean {
    if (!this.playlistId) return false;
    return this.playlistService.checkPlaylists(playlist);
  }

  ngOnDestroy() {
    this.selectedTrackSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}
