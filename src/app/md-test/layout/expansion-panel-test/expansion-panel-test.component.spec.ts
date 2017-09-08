import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelTestComponent } from './expansion-panel-test.component';

describe('ExpansionPanelTestComponent', () => {
  let component: ExpansionPanelTestComponent;
  let fixture: ComponentFixture<ExpansionPanelTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionPanelTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
