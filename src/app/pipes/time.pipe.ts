import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(ms: string): string {
    const msNum = Number(ms);
    const seconds = msNum / 1000;
    const minutes = msNum / (1000 * 60);

    const secondsString = seconds < 10 ? `0${seconds}` : seconds.toString();
    const minutesString = minutes < 10 ? `0${minutes}` : minutes.toString();

    return `${minutesString}:${secondsString}`;
  }
}
