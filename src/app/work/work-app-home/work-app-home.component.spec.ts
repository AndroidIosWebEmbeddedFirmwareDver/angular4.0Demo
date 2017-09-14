import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAppHomeComponent } from './work-app-home.component';

describe('WorkAppHomeComponent', () => {
  let component: WorkAppHomeComponent;
  let fixture: ComponentFixture<WorkAppHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAppHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
