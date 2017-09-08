import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleTestComponent } from './button-toggle-test.component';

describe('ButtonToggleTestComponent', () => {
  let component: ButtonToggleTestComponent;
  let fixture: ComponentFixture<ButtonToggleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonToggleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
