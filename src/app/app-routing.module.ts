import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyAuthComponent } from './components/shared/spotify-auth/spotify-auth.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { SearchComponent } from './components/search/search.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { AuthGuard } from './guards/auth.guard';

// TODO: add wildcard route
// ! unable to add wildcard route
const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [SpotifyAuthComponent];
