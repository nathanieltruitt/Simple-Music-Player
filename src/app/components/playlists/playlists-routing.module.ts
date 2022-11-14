import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { SpotifyGuard } from 'src/app/guards/spotify.guard';
import { PlaylistDetailComponent } from './playlist-modal/playlist-detail.component';
import { PlaylistsComponent } from './playlists.component';

const routes: Routes = [
  {
    path: 'playlists',
    component: PlaylistsComponent,
    canActivate: [SpotifyGuard, AuthGuard],
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistsRoutingModule {}
export const RoutingComponents = [PlaylistsComponent, PlaylistDetailComponent];
