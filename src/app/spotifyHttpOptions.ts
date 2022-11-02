import { HttpHeaders } from '@angular/common/http';

const accessString = localStorage.getItem('spotify_auth') || '';
let accessToken;
if (accessString) {
  accessToken = JSON.parse(accessString)['access_token'];
} else {
  accessToken = '';
}

export const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
  }),
};
