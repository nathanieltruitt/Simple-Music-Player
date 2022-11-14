import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayerComponent } from './components/search/player/player.component';
import { QueueComponent } from './components/search/queue/queue.component';

import { TimePipe } from './pipes/time.pipe';
import { TrackSliderComponent } from './components/search/player/track-slider/track-slider.component';
import { HttpErrorInterceptor } from './services/data-access/http-error.interceptor';
import { SpotifyGuard } from './guards/spotify.guard';
import { PlaylistViewerComponent } from './components/search/playlist-viewer/playlist-viewer.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './components/shared/shared.module';

// TODO: break each app section into separate modules including shared module
@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    PlayerComponent,
    QueueComponent,
    TimePipe,
    TrackSliderComponent,
    PlaylistViewerComponent,
  ],
  imports: [BrowserModule, AuthModule, AppRoutingModule, SharedModule],
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
