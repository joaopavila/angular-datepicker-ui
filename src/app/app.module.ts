import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgDatepickerUiModule } from 'ng-datepicker-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDatepickerUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
