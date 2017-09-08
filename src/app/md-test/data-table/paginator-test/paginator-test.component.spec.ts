import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorTestComponent } from './paginator-test.component';

describe('PaginatorTestComponent', () => {
  let component: PaginatorTestComponent;
  let fixture: ComponentFixture<PaginatorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
