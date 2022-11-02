import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { PlayerComponent } from './components/search/player/player.component';
import { QueueComponent } from './components/search/queue/queue.component';
import { PlaylistComponent } from './components/shared/playlist/playlist.component';

import { TimePipe } from './pipes/time.pipe';
import { TrackSliderComponent } from './components/search/player/track-slider/track-slider.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HttpErrorInterceptor } from './services/data-access/http-error.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SpotifyGuard } from './guards/spotify.guard';
import { PlaylistViewerComponent } from './components/search/playlist-viewer/playlist-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    SearcherComponent,
    PlayerComponent,
    QueueComponent,
    PlaylistComponent,
    TimePipe,
    TrackSliderComponent,
    SideNavComponent,
    LoginComponent,
    PlaylistViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    SpotifyGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
