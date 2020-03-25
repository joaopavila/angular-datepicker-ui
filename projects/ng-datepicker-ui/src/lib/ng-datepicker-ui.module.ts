import { NgModule } from '@angular/core';
import { NgDatepickerUiComponent } from './ng-datepicker-ui.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgDatepickerUiComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgDatepickerUiComponent]
})
export class NgDatepickerUiModule { }
