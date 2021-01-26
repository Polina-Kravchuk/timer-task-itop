import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-total-seconds',
  templateUrl: './display-total-seconds.component.html',
  styleUrls: ['./display-total-seconds.component.scss']
})
export class DisplayTotalSecondsComponent {

  @Input()
  totalSeconds: number = 0;
}
