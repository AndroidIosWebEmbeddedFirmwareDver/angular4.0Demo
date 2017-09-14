import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAppUserExamComponent } from './work-app-user-exam.component';

describe('WorkAppUserExamComponent', () => {
  let component: WorkAppUserExamComponent;
  let fixture: ComponentFixture<WorkAppUserExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAppUserExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAppUserExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
