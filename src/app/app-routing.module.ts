import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistModalComponent } from './components/playlists/playlist-modal/playlist-modal.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
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
        component: PlaylistModalComponent,
      },
      {
        path: 'detail/new',
        component: PlaylistModalComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'callback',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  SearchComponent,
  PlaylistModalComponent,
  PlaylistsComponent,
];
