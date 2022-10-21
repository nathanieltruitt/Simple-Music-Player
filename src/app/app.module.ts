import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RoutingComponents } from './app-routing.module';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ResultInfoComponent } from './components/search/result-info/result-info.component';
import { BottomPlayerComponent } from './components/shared/bottom-player/bottom-player.component';
import { QueueComponent } from './components/shared/queue/queue.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistComponent } from './components/playlists/playlist/playlist.component';
import { PlaylistModalComponent } from './components/playlists/playlist-modal/playlist-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RoutingComponents,
    SearcherComponent,
    ResultInfoComponent,
    BottomPlayerComponent,
    QueueComponent,
    PlaylistsComponent,
    PlaylistComponent,
    PlaylistModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
