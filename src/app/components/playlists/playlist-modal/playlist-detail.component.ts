import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectedTrackService } from 'src/app/services/component-communication/selected-track.service';
import { PlaylistService } from 'src/app/services/data-access/playlist.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Track } from 'src/app/models/track.interface';
import { QueueService } from 'src/app/services/component-communication/queue.service';
import { WebPlayerService } from 'src/app/services/data-access/web-player.service';
import { PlaylistDetailService } from 'src/app/services/component-communication/playlist-detail.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css'],
})
export class PlaylistDetailComponent implements OnInit {
  selectedTrackSub!: Subscription;
  routeSub!: Subscription;
  playlistForm!: FormGroup;
  tracks: Track[] = [];
  // kind of a dirty way to do this
  playButtonClicked = false;
  faTrashCan = faTrashCan;
  playlistId!: number;
  lastNum!: number;
  constructor(
    private playlistDetailService: PlaylistDetailService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private selectedTrackService: SelectedTrackService,
    private playlistService: PlaylistService
  ) {}

  ngOnInit(): void {
    this.selectedTrackSub = this.selectedTrackService.selected.subscribe(
      (track) => {
        if (this.playButtonClicked) {
          this.playButtonClicked = false;
          return;
        }
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
            this.playlistDetailService.forbiddenNameValidator(
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
          this.playlistDetailService.forbiddenNameValidator(
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

  onQueueTrack(track: Track) {
    this.playlistDetailService.queueTrack(track);
  }

  onPlayTrack(track: Track) {
    this.playButtonClicked = true;
    this.playlistDetailService.playTrack(track);
  }

  onCheckPlaylists(playlist: string): boolean {
    if (!this.playlistId) return false;
    return this.playlistDetailService.checkPlaylists(playlist);
  }

  ngOnDestroy() {
    this.selectedTrackSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}
