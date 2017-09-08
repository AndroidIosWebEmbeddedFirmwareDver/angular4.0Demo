import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTestComponent } from './checkbox-test.component';

describe('CheckboxTestComponent', () => {
  let component: CheckboxTestComponent;
  let fixture: ComponentFixture<CheckboxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
