import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + environment.accessToken,
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TrackSearchService {
  baseUrl = 'https://api.spotify.com/v1/';
  // * This service calls the spotify API to retrieve track information

  constructor(private http: HttpClient) {}

  getTrack(track: string) {
    return of(
      this.http.get(
        this.baseUrl +
          `search?q=${encodeURIComponent(track)}&type=track&limit=5`,
        httpOptions
      )
    );
  }
}
