import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHeaderTestComponent } from './sort-header-test.component';

describe('SortHeaderTestComponent', () => {
  let component: SortHeaderTestComponent;
  let fixture: ComponentFixture<SortHeaderTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortHeaderTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortHeaderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
