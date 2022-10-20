import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  delay,
  Observable,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import { QueueService } from 'src/app/services/component-communication/queue.service';
import { SelectedTrackService } from 'src/app/services/component-communication/selected-track.service';
import { TrackSearchService } from 'src/app/services/data-access/track-search.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent implements OnInit {
  searcherValue!: string;
  keywordSub!: Subscription;
  keywordSearch$ = new Subject<string>();
  results$!: Observable<any> | undefined;
  resultsErr$!: Observable<HttpErrorResponse>;

  constructor(
    private trackSearchService: TrackSearchService,
    private selectedTrackService: SelectedTrackService,
    private queueService: QueueService
  ) {}

  ngOnInit(): void {
    this.keywordSub = this.keywordSearch$
      .pipe(
        debounceTime(500),
        switchMap((x) => this.trackSearchService.getTrack(x))
      )
      .subscribe({
        next: (response) => (this.results$ = response),
        error: (err) => {
          this.resultsErr$ = err;
        },
      });
  }

  onSearch(track: string) {
    if (track === '') {
      this.results$ = undefined;
      return;
    }
    this.keywordSearch$.next(track);
  }

  // test() {
  //   this.results$?.subscribe((x) => console.log(x));
  // }

  onOverlayClick() {
    this.results$ = undefined;
  }

  onSelectTrack(track: any) {
    this.selectedTrackService.selectTrack(track);
    // set results back to undefined on track select
    this.results$ = undefined;
    this.searcherValue = '';
  }

  onAddTrackToQueue(track: any) {
    this.queueService.addTrackToQueue(track);
  }

  ngOnDestroy() {
    this.keywordSub.unsubscribe();
  }
}
