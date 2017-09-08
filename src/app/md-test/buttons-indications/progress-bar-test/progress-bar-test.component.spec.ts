import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarTestComponent } from './progress-bar-test.component';

describe('ProgressBarTestComponent', () => {
  let component: ProgressBarTestComponent;
  let fixture: ComponentFixture<ProgressBarTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
