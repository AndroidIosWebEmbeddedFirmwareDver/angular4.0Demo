import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerTestComponent } from './progress-spinner-test.component';

describe('ProgressSpinnerTestComponent', () => {
  let component: ProgressSpinnerTestComponent;
  let fixture: ComponentFixture<ProgressSpinnerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
