import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoursPipe } from './pipes/hours.pipe';
import { MinutesPipe } from './pipes/minutes.pipe';
import { SecondsPipe } from './pipes/seconds.pipe';
import { DisplayTotalSecondsComponent } from './components/display-total-seconds/display-total-seconds.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HoursPipe,
    MinutesPipe,
    SecondsPipe,
    DisplayTotalSecondsComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
