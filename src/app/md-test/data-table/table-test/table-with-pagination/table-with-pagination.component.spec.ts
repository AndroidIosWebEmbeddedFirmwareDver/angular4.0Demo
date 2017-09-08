import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithPaginationComponent } from './table-with-pagination.component';

describe('TableWithPaginationComponent', () => {
  let component: TableWithPaginationComponent;
  let fixture: ComponentFixture<TableWithPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
