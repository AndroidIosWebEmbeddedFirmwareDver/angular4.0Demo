import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAppWorkerTypeDeleteComponent } from './work-app-worker-type-delete.component';

describe('WorkAppWorkerTypeDeleteComponent', () => {
  let component: WorkAppWorkerTypeDeleteComponent;
  let fixture: ComponentFixture<WorkAppWorkerTypeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAppWorkerTypeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAppWorkerTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
