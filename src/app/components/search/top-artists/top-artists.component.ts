import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArtistService } from 'src/app/services/data-access/artist.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css'],
})
export class TopArtistsComponent implements OnInit {
  // TODO: need model for artists
  // TODO: needs to scroll when list is too large
  artists$!: Observable<any> | undefined;

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.getArtists().then((obs) => {
      this.artists$ = obs;
    });
  }

  getArtists() {
    return this.artistService.getArtists();
  }
}
