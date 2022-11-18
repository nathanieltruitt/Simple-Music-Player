import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { QueueComponent } from './queue/queue.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistViewerComponent } from './playlist-viewer/playlist-viewer.component';
import { TrackSliderComponent } from './player/track-slider/track-slider.component';
import { TopArtistsComponent } from './top-artists/top-artists.component';

@NgModule({
  declarations: [
    SearchComponent,
    QueueComponent,
    PlayerComponent,
    PlaylistViewerComponent,
    TrackSliderComponent,
    TopArtistsComponent,
  ],
  imports: [SharedModule, SearchRoutingModule],
  exports: [SearchComponent],
})
export class SearchModule {}
