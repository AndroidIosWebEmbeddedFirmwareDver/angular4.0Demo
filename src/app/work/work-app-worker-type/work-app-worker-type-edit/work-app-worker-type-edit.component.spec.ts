import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAppWorkerTypeEditComponent } from './work-app-worker-type-edit.component';

describe('WorkAppWorkerTypeEditComponent', () => {
  let component: WorkAppWorkerTypeEditComponent;
  let fixture: ComponentFixture<WorkAppWorkerTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAppWorkerTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAppWorkerTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
