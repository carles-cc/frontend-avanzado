import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicTrainingComponent } from './academic-training.component';

describe('AcademicTrainingComponent', () => {
  let component: AcademicTrainingComponent;
  let fixture: ComponentFixture<AcademicTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
