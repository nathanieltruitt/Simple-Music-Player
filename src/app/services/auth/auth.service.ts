import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const loginUri =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(email: string, password: string) {
    return this.http.post(loginUri + environment.accessToken, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
