import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTestComponent } from './icon-test.component';

describe('IconTestComponent', () => {
  let component: IconTestComponent;
  let fixture: ComponentFixture<IconTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
