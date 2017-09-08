import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTestComponent } from './input-test.component';

describe('InputTestComponent', () => {
  let component: InputTestComponent;
  let fixture: ComponentFixture<InputTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
