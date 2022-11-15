import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './components/shared/shared.module';
import { SearchModule } from './components/search/search.module';
import { PlaylistsModule } from './components/playlists/playlists.module';

import { RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackSliderComponent } from './components/search/player/track-slider/track-slider.component';
import { SpotifyGuard } from './guards/spotify.guard';

import { HttpErrorInterceptor } from './services/data-access/http-error.interceptor';
// TODO: work on improving styles
@NgModule({
  declarations: [AppComponent, RoutingComponents, TrackSliderComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    SharedModule,
    SearchModule,
    PlaylistsModule,
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
