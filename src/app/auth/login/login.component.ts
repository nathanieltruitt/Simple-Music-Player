import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errMsg!: string;
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
