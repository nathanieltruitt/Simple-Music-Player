import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyAuthComponent } from './components/shared/spotify-auth/spotify-auth.component';
import { AuthGuard } from './guards/auth.guard';

// TODO: add wildcard route
const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: SpotifyAuthComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'callback',
    component: SpotifyAuthComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [SpotifyAuthComponent];
