import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTestComponent } from './slider-test.component';

describe('SliderTestComponent', () => {
  let component: SliderTestComponent;
  let fixture: ComponentFixture<SliderTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
