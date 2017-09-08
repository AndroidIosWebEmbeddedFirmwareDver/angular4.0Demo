import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListTestComponent } from './grid-list-test.component';

describe('GridListTestComponent', () => {
  let component: GridListTestComponent;
  let fixture: ComponentFixture<GridListTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
