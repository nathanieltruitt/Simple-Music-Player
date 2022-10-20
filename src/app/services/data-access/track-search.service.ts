import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of, throwError } from 'rxjs';
import { httpOptions } from 'src/app/spotifyHttpOptions';

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + environment.accessToken,
//     'Content-Type': 'application/json',
//   }),
// };

@Injectable({
  providedIn: 'root',
})
export class TrackSearchService {
  // TODO: error handling
  baseUrl = 'https://api.spotify.com/v1/';
  // * This service calls the spotify API to retrieve track information

  constructor(private http: HttpClient) {}

  getTrack(track: string) {
    return of(
      this.http
        .get(
          this.baseUrl +
            `search?derpq=${encodeURIComponent(track)}&type=track&limit=5`,
          httpOptions
        )
        .pipe(
          catchError((err) => {
            return throwError(() => new Error(err.message));
          })
        )
    );
  }
}
