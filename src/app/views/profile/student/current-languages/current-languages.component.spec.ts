import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLanguagesComponent } from './current-languages.component';

describe('CurrentLanguagesComponent', () => {
  let component: CurrentLanguagesComponent;
  let fixture: ComponentFixture<CurrentLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
