import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  errMsg!: string;
  // TODO: setup error handling message in UI
  // TODO: Refactor auth component
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const { email, password } = form.value;
    this.authService.signIn(email, password).subscribe({
      next: (res) => {
        console.log('Auth Success: ', res);
        this.router.navigate(['/search']);
      },
      error: (err) => (this.errMsg = err.message),
    });
  }
}
