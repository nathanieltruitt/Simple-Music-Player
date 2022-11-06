import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistDetailComponent } from './components/playlists/playlist-modal/playlist-detail.component';
import { SearchComponent } from './components/search/search.component';
import { SpotifyAuthComponent } from './components/shared/spotify-auth/spotify-auth.component';
import { SpotifyGuard } from './guards/spotify.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [SpotifyGuard],
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
    canActivate: [SpotifyGuard],
    children: [
      {
        path: 'detail/',
        redirectTo: '/playlists/detail/new',
        pathMatch: 'full',
      },
      {
        path: 'detail/:id',
        component: PlaylistDetailComponent,
      },
      {
        path: 'detail/new',
        component: PlaylistDetailComponent,
      },
    ],
  },
  {
    path: 'login',
    component: SpotifyAuthComponent,
  },
  {
    path: 'callback',
    component: SpotifyAuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  SearchComponent,
  PlaylistDetailComponent,
  PlaylistsComponent,
  SpotifyAuthComponent,
];
