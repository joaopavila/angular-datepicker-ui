import { TestBed } from '@angular/core/testing';

import { Ng2DatepickerUiService } from './ng2-datepicker-ui.service';

describe('Ng2DatepickerUiService', () => {
  let service: Ng2DatepickerUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2DatepickerUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
