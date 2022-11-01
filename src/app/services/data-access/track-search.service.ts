import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  switchMap,
  of,
  Observable,
  catchError,
  Subject,
  throwError,
} from 'rxjs';
import { httpOptions } from 'src/app/spotifyHttpOptions';
import { Track } from 'src/app/models/track.interface';

@Injectable({
  providedIn: 'root',
})
export class TrackSearchService {
  // TODO: error handling
  baseUrl = 'https://api.spotify.com/v1/';
  // * This service calls the spotify API to retrieve track information

  constructor(private http: HttpClient) {}

  getTrack(track: string): Observable<Track[]> {
    return this.http
      .get<any>(
        this.baseUrl +
          `search?q=${encodeURIComponent(track)}&type=track&limit=5`,
        httpOptions
      )
      .pipe(
        switchMap((res) => of(res.tracks.items)),
        catchError((err) => {
          let errMessage = '';
          switch (err.status) {
            case 400:
              errMessage =
                'There was an issue handling the request, please consult IT.';
              break;

            case 401:
              errMessage = 'Access to the server was denied.';
              break;

            default:
              break;
          }
          return throwError(() => new Error(errMessage));
        })
      );
  }
}
