import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithFilteringComponent } from './table-with-filtering.component';

describe('TableWithFilteringComponent', () => {
  let component: TableWithFilteringComponent;
  let fixture: ComponentFixture<TableWithFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
