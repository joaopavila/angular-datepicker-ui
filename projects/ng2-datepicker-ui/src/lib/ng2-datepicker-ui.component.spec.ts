import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2DatepickerUiComponent } from './ng2-datepicker-ui.component';

describe('Ng2DatepickerUiComponent', () => {
  let component: Ng2DatepickerUiComponent;
  let fixture: ComponentFixture<Ng2DatepickerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2DatepickerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2DatepickerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
