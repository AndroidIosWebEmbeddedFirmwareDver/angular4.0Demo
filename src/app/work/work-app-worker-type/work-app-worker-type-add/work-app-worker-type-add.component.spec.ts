import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAppWorkerTypeAddComponent } from './work-app-worker-type-add.component';

describe('WorkAppWorkerTypeAddComponent', () => {
  let component: WorkAppWorkerTypeAddComponent;
  let fixture: ComponentFixture<WorkAppWorkerTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAppWorkerTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAppWorkerTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
