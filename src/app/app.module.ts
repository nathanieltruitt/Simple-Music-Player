import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RoutingComponents } from './app-routing.module';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ResultInfoComponent } from './components/search/result-info/result-info.component';
import { BottomPlayerComponent } from './components/shared/bottom-player/bottom-player.component';
import { QueueComponent } from './components/shared/queue/queue.component';
import { PlaylistComponent } from './components/playlists/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RoutingComponents,
    SearcherComponent,
    ResultInfoComponent,
    BottomPlayerComponent,
    QueueComponent,
    PlaylistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
