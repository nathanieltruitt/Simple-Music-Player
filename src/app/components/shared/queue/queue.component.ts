import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/component-communication/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
})
export class QueueComponent implements OnInit {
  constructor(private queueService: QueueService) {}

  ngOnInit(): void {}

  getQueue() {
    return this.queueService.queue$;
  }

  removeItem(idx: number) {
    this.queueService.removeTrack(idx);
  }
}
