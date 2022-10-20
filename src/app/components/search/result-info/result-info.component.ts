import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectedTrackService } from 'src/app/services/component-communication/selected-track.service';
import { WebPlayerService } from 'src/app/services/data-access/web-player.service';

@Component({
  selector: 'app-result-info',
  templateUrl: './result-info.component.html',
  styleUrls: ['./result-info.component.css'],
})
export class ResultInfoComponent implements OnInit {
  result$!: Observable<any>;
  constructor(private selectedTrackService: SelectedTrackService, private webPlayerService: WebPlayerService) {}

  ngOnInit(): void {
    this.result$ = this.selectedTrackService.selected;
  }

  getArtistString(artists: any[]) {
    let artistStr;
    if (artists.length === 1) {
      artistStr = artists[0].name;
      return artistStr;
    } else {
      artistStr = '';
    }

    for (let artist of artists) {
      artistStr += `${artist.name}, `;
    }
    return artistStr;
  }

  addToQueue(track: any) {
    this.webPlayerService.addSong(track)
    console.log(this.webPlayerService.playerStatus)
  }
}
