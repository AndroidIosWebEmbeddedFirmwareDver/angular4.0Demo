import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteTestComponent } from './autocomplete-test.component';

describe('AutocompleteTestComponent', () => {
  let component: AutocompleteTestComponent;
  let fixture: ComponentFixture<AutocompleteTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
