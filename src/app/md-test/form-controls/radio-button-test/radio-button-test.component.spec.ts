import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonTestComponent } from './radio-button-test.component';

describe('RadioButtonTestComponent', () => {
  let component: RadioButtonTestComponent;
  let fixture: ComponentFixture<RadioButtonTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
