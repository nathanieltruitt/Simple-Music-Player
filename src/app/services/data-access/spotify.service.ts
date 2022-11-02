import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const redirectUri = 'http://localhost:8888/callback';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' + btoa(environment.clientId + ':' + environment.clientSecret),
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  scopes =
    'streaming user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control user-read-email user-read-private';
  // The purpose of this service is to fetch an access token from spotify
  // This could be built on a backend but for now going to build it into the frontend with
  // the client secret stored in the local env.
  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (!window.location.href.includes('callback')) {
      const loginUrl = new URL(
        'https://accounts.spotify.com/authorize?' +
          new URLSearchParams({
            response_type: 'code',
            client_id: environment.clientId,
            scope: this.scopes,
            redirect_uri: redirectUri,
          }).toString()
      );
      window.location.href = loginUrl.toString();
    } else {
      const params = new URL(window.location.href).searchParams;
      const code = params.get('code');
      const body = new URLSearchParams({
        code: code || '',
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      });

      this.http
        .post(
          'https://accounts.spotify.com/api/token',
          body.toString(),
          httpOptions
        )
        .subscribe({
          next: (res) => {
            localStorage.setItem('spotify_auth', JSON.stringify(res));
            this.router.navigate(['/search']);
          },
        });
    }
  }
}
