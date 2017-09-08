import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTestComponent } from './toolbar-test.component';

describe('ToolbarTestComponent', () => {
  let component: ToolbarTestComponent;
  let fixture: ComponentFixture<ToolbarTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
