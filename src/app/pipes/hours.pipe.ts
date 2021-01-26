import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {

  transform(totalSeconds:number): number {
    return Math.floor(totalSeconds / 3600);
  }
}
