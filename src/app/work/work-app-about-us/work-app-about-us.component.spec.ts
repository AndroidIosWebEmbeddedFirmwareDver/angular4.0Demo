import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAppAboutUsComponent } from './work-app-about-us.component';

describe('WorkAppAboutUsComponent', () => {
  let component: WorkAppAboutUsComponent;
  let fixture: ComponentFixture<WorkAppAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAppAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAppAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
