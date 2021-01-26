import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutes'
})
export class MinutesPipe implements PipeTransform {

  transform(totalSeconds: number): number {
    const totalMinutes = Math.floor(totalSeconds / 60);
    return totalMinutes % 60;
  }
}
