import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyAuthComponent } from './components/shared/spotify-auth/spotify-auth.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
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
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [SpotifyAuthComponent];
