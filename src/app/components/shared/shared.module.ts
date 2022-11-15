import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist/playlist.component';
import { SearcherComponent } from './searcher/searcher.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TimePipe } from 'src/app/pipes/time.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PlaylistComponent,
    SearcherComponent,
    SideNavComponent,
    TimePipe,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    PlaylistComponent,
    SearcherComponent,
    SideNavComponent,
    PageNotFoundComponent,
    TimePipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
