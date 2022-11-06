import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  // TODO: setup error handling message in UI
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const { email, password } = form.value;
    this.authService.signIn(email, password).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
