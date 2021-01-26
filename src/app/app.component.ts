import { Component } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { repeatWhen, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly stopSubject = new Subject<void>();
  private readonly startSubject = new Subject<void>();

  public totalSeconds = 0;

  // we will use this field to check double click
  private waitLastClicked: Date;

  constructor() {
    timer(0, 1000)
      .pipe(
        takeUntil(this.stopSubject),
        repeatWhen(() => this.startSubject)
      ).subscribe(e => {
        this.totalSeconds += 1;
      });
    this.stopSubject.next();
  }

  start(): void {
    this.startSubject.next();
  }

  wait() {
    const now = new Date();
    const doubleClickMilliseconds = 300;
    // check if clicked before and check double click
    if (this.waitLastClicked && this.isDoubleClick(this.waitLastClicked, now, doubleClickMilliseconds)) {
      this.stopSubject.next();
    } else {
      // if not, just save when we click
      this.waitLastClicked = now;
    }
  }

  reset() {
    this.totalSeconds = 0;
  }

  stop(): void {
    this.reset();
    this.stopSubject.next();
  }

  isDoubleClick(date1: Date, date2: Date, doubleClickMilliseconds: number): boolean {
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    return difference_ms < doubleClickMilliseconds;
  }
}
