import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAppMainComponent } from './work-app-main.component';

describe('WorkAppMainComponent', () => {
  let component: WorkAppMainComponent;
  let fixture: ComponentFixture<WorkAppMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAppMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
