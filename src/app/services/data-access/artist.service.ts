import { HttpClient } from '@angular/common/http';
import { httpOptions } from 'src/app/spotifyHttpOptions';
import { Injectable } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { lastValueFrom, map, Observable, Subscription, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  artistSub!: Subscription;
  artists$!: Observable<any[]>;
  constructor(
    private http: HttpClient,
    private playlistService: PlaylistService
  ) {
    this.artists$ = this.playlistService.playlists$.pipe(
      take(1),
      map((playlists) => {
        let artists: any[] = [];
        for (let playlist of playlists) {
          for (let track of playlist.tracks) {
            artists = [...artists, ...track.artists];
          }
        }
        return artists;
      })
    );

    // this.playlistService.playlists$.subscribe({
    //   next: (playlists) => {
    //     console.log(this.artists);
    //   },
    // });
  }

  async getArtists() {
    function onlyUnique(value: any, index: any, self: any) {
      return self.indexOf(value) === index;
    }

    let artistsList: string[] = await (await lastValueFrom(this.artists$))
      .map((artist) => artist.id)
      .filter(onlyUnique);
    if (artistsList.length === 0) return;
    return this.http.get<any>(
      'https://api.spotify.com/v1/artists?ids=' + artistsList.join(','),
      httpOptions
    );
  }

  ngOnDestroy() {}
}
