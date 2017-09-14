import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAppSanfangFuliComponent } from './work-app-sanfang-fuli.component';

describe('WorkAppSanfangFuliComponent', () => {
  let component: WorkAppSanfangFuliComponent;
  let fixture: ComponentFixture<WorkAppSanfangFuliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAppSanfangFuliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAppSanfangFuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
