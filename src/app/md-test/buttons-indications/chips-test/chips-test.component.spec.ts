import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsTestComponent } from './chips-test.component';

describe('ChipsTestComponent', () => {
  let component: ChipsTestComponent;
  let fixture: ComponentFixture<ChipsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
