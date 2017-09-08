import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerTestComponent } from './datepicker-test.component';

describe('DatepickerTestComponent', () => {
  let component: DatepickerTestComponent;
  let fixture: ComponentFixture<DatepickerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
