import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SmpModalService {
  // * This service will be used for any instances where modals need to inform the application of a state change.
  // used to tell the app that a modal is open.
  isOpen$ = new Subject<number>();
  constructor() {
    this.isOpen$.next(0);
  }
}
