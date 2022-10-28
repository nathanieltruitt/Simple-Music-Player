import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { WebPlayerService } from 'src/app/services/data-access/web-player.service';

@Component({
  selector: 'app-track-slider',
  templateUrl: './track-slider.component.html',
  styleUrls: ['./track-slider.component.css'],
})
export class TrackSliderComponent implements OnInit {
  // FIXME: need to fix issue with properties not re-rendering
  @Input() result!: any;
  sliderValue = 0;
  sliderLength = 1000;
  sliderInterval!: NodeJS.Timer;

  constructor(private webPlayerService: WebPlayerService) {}

  ngOnInit(): void {
    if (this.result) {
      // set the end timestamp of the slider
      this.sliderLength = Math.floor(this.result.duration_ms / 1000);
      this.sliderInterval = setInterval(() => {
        if (this.webPlayerService.playerStatus) {
          // increase the value by 1 if the value is less than the length of the song. Otherwise clear the interval
          if (this.sliderValue < this.sliderLength) {
            this.sliderValue = this.sliderValue + 1;
          } else {
            this.sliderValue = 0;
            clearInterval(this.sliderInterval);
          }
        }
      }, 1000);
    }
  }

  get playerState(): boolean {
    return this.webPlayerService.playerStatus;
  }

  getProgress() {
    const progressLength = 100 / this.sliderLength;
    const progressValue = progressLength * this.sliderValue;
    return progressValue;
  }
}
