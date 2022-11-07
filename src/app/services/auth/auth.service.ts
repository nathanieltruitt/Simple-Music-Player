import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

interface AuthResponse {
  email: string;
  localId: string;
  idToken: string;
  expiresIn: number;
}

const loginUri =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authData = localStorage.getItem('userData');
  authenticatedUser = new BehaviorSubject<User | null>(
    this.authData ? JSON.parse(this.authData) : null
  );
  constructor(private http: HttpClient) {}

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponse>(loginUri + environment.accessToken, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          this.handleAuth(
            res.email,
            res.localId,
            res.idToken,
            Number(res.expiresIn)
          );
        })
      );
  }

  handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ): void {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const formUser = new User(email, userId, token, expDate);
    this.authenticatedUser.next(formUser);
    localStorage.setItem('userData', JSON.stringify(formUser));
  }
}
