import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarTestComponent } from './snackbar-test.component';

describe('SnackbarTestComponent', () => {
  let component: SnackbarTestComponent;
  let fixture: ComponentFixture<SnackbarTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
