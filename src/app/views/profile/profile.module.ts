import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor'; // https://github.com/kolkov/angular-editor

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileStudentComponent } from './student/profile-student.component';
import { ProfileCompanyComponent } from './company/profile-company.component';
import { StudyComponent } from './student/study/study.component';
import { AcademicTrainingComponent } from './student/academic-training/academic-training.component';
import { InfoComponent } from './student/info/info.component';
import { PersonalDataComponent } from './student/personal-data/personal-data.component';
import { LaboralExperienceComponent } from './student/laboral-experience/laboral-experience.component';
import { JobComponent } from './student/job/job.component';
import { CurrentLanguagesComponent } from './student/current-languages/current-languages.component';
import { LanguageComponent } from './student/language/language.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileStudentComponent,
    ProfileCompanyComponent,
    StudyComponent,
    AcademicTrainingComponent,
    InfoComponent,
    PersonalDataComponent,
    LaboralExperienceComponent,
    JobComponent,
    CurrentLanguagesComponent,
    LanguageComponent,
    ProfileCompanyComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AngularEditorModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
