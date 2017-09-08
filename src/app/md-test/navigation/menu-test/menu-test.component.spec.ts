import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTestComponent } from './menu-test.component';

describe('MenuTestComponent', () => {
  let component: MenuTestComponent;
  let fixture: ComponentFixture<MenuTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
