import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlaylistComponent } from './playlist/playlist.component';
import { SearcherComponent } from './searcher/searcher.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [PlaylistComponent, SearcherComponent, SideNavComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    PlaylistComponent,
    SearcherComponent,
    SideNavComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
