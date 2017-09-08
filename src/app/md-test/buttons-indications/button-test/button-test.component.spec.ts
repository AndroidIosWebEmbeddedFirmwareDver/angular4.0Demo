import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTestComponent } from './button-test.component';

describe('ButtonTestComponent', () => {
  let component: ButtonTestComponent;
  let fixture: ComponentFixture<ButtonTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
