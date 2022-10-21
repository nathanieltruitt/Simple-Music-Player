import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistModalComponent } from './components/playlists/playlist-modal/playlist-modal.component';
import { SearchComponent } from './components/search/search.component';

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
