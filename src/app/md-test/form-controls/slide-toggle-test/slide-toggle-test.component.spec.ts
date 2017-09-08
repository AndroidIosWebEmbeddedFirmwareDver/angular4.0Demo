import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleTestComponent } from './slide-toggle-test.component';

describe('SlideToggleTestComponent', () => {
  let component: SlideToggleTestComponent;
  let fixture: ComponentFixture<SlideToggleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideToggleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
