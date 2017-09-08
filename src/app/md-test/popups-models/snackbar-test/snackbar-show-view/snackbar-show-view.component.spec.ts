import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarShowViewComponent } from './snackbar-show-view.component';

describe('SnackbarShowViewComponent', () => {
  let component: SnackbarShowViewComponent;
  let fixture: ComponentFixture<SnackbarShowViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarShowViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
