import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAppUserStatisticsComponent } from './work-app-user-statistics.component';

describe('WorkAppUserStatisticsComponent', () => {
  let component: WorkAppUserStatisticsComponent;
  let fixture: ComponentFixture<WorkAppUserStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAppUserStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAppUserStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
