import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDialogCommonComponent } from './md-dialog-common.component';

describe('MdDialogCommonComponent', () => {
  let component: MdDialogCommonComponent;
  let fixture: ComponentFixture<MdDialogCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdDialogCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdDialogCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
