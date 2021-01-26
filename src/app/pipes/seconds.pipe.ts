import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seconds'
})
export class SecondsPipe implements PipeTransform {
  transform(totalSeconds: number): number {
    return totalSeconds % 60;
  }
}
