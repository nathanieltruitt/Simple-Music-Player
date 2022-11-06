import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'auth/login',
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
})
export class AuthModule {}
