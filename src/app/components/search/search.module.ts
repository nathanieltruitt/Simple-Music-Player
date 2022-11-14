import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { QueueComponent } from './queue/queue.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistViewerComponent } from './playlist-viewer/playlist-viewer.component';

@NgModule({
  declarations: [
    SearchComponent,
    QueueComponent,
    PlayerComponent,
    PlaylistViewerComponent,
  ],
  imports: [SharedModule, SearchRoutingModule],
  exports: [SearchComponent],
})
export class SearchModule {}
