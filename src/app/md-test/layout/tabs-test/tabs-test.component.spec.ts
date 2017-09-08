import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTestComponent } from './tabs-test.component';

describe('TabsTestComponent', () => {
  let component: TabsTestComponent;
  let fixture: ComponentFixture<TabsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
