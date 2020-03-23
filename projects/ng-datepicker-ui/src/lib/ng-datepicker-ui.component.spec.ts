import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgDatepickerUiComponent } from './ng-datepicker-ui.component';


describe('NgDatepickerUiComponent', () => {
  let component: NgDatepickerUiComponent;
  let fixture: ComponentFixture<NgDatepickerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatepickerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatepickerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
