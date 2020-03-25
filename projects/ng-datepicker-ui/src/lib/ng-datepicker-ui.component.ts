import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'datepicker-ui',
  templateUrl: './ng-datepicker-ui.component.html',
  styleUrls: ['./ng-datepicker-ui.component.scss']
})
export class NgDatepickerUiComponent implements OnInit {

  private allMonths: string[] = [];

  @Input() showCalendar: boolean;
  @Input() set months(allMonths: string[]) {
    this.allMonths = allMonths;
  }

  fullDate = new Date();
  monthYear: string;
  exhibitionToday: string;

  date = {
    day: this.fullDate.getDate(),
    month: this.fullDate.getMonth(),
    year: this.fullDate.getFullYear()
  };


  constructor() { }

  ngOnInit() {
    this.exhibitionToday = `${this.allMonths[this.date.month]}  ${this.date.day}, ${this.date.year}`;
    this.monthYear = `${this.allMonths[this.date.month]} ${this.date.year}`;
  }

  goToNextMonth() {
    this.date.month++;
    if (this.date.month > 11) {
      this.date.month = 0;
      this.date.year++;
    }
    this.monthYear = `${this.allMonths[this.date.month]} ${this.date.year}`;
  }

  goToPrevMonth() {
    this.date.month--;
    if (this.date.month < 0) {
      this.date.month = 11;
      this.date.year--;
    }
    this.monthYear = `${this.allMonths[this.date.month]} ${this.date.year}`;
  }

}
