import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAppWorkerTypeComponent } from './work-app-worker-type.component';

describe('WorkAppWorkerTypeComponent', () => {
  let component: WorkAppWorkerTypeComponent;
  let fixture: ComponentFixture<WorkAppWorkerTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAppWorkerTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAppWorkerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
