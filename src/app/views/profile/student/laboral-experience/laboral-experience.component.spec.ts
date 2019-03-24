import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralExperienceComponent } from './laboral-experience.component';

describe('LaboralExperienceComponent', () => {
  let component: LaboralExperienceComponent;
  let fixture: ComponentFixture<LaboralExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboralExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboralExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
