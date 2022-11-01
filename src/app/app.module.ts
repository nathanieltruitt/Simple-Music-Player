import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ResultInfoComponent } from './components/search/result-info/result-info.component';
import { BottomPlayerComponent } from './components/shared/bottom-player/bottom-player.component';
import { QueueComponent } from './components/shared/queue/queue.component';
import { PlaylistComponent } from './components/playlists/playlist/playlist.component';

import { TimePipe } from './pipes/time.pipe';
import { TrackSliderComponent } from './components/search/result-info/track-slider/track-slider.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HttpErrorInterceptor } from './services/data-access/http-error.interceptor';

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
    TimePipe,
    TrackSliderComponent,
    SideNavComponent,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
