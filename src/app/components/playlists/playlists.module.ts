import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { RoutingComponents } from './playlists-routing.module';

@NgModule({
  declarations: [RoutingComponents],
  imports: [SharedModule, PlaylistsRoutingModule],
})
export class PlaylistsModule {}
