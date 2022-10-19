import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  delay,
  Observable,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import { TrackSearchService } from 'src/app/services/data-access/track-search.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent implements OnInit {
  keywordSub!: Subscription;
  keywordSearch$ = new Subject<string>();
  results$!: Observable<any> | undefined;

  constructor(private trackSearchService: TrackSearchService) {}

  ngOnInit(): void {
    this.keywordSub = this.keywordSearch$
      .pipe(
        debounceTime(500),
        switchMap((x) => this.trackSearchService.getTrack(x))
      )
      .subscribe((response) => {
        this.results$ = response;
      });
  }

  onSearch(track: string) {
    if (track === '') {
      this.results$ = undefined;
      return;
    }
    this.keywordSearch$.next(track);
  }

  onOverlayClick() {
    this.results$ = undefined;
  }

  ngOnDestroy() {
    this.keywordSub.unsubscribe();
  }
}
