import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import {ProfileStudentComponent} from './student/profile-student.component';
import {ProfileCompanyComponent} from './company/profile-company.component';
import {InfoComponent} from './student/info/info.component';
import {PersonalDataComponent} from './student/personal-data/personal-data.component';
import {CurrentLanguagesComponent} from './student/current-languages/current-languages.component';
import {AcademicTrainingComponent} from './student/academic-training/academic-training.component';
import {StudyComponent} from './student/study/study.component';
import {LaboralExperienceComponent} from './student/laboral-experience/laboral-experience.component';
import {LanguageComponent} from './student/language/language.component';
import {JobComponent} from './student/job/job.component';

const routes: Routes = [
  {
    path: 'student',
    children: [
      {
        path: '',
        component: ProfileStudentComponent,
      },
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'personal',
        component: PersonalDataComponent
      },
      {
        path: 'languages',
        component: CurrentLanguagesComponent,
        children: [
          {
            path: 'language',
            component: LanguageComponent,
            outlet: 'language'
          },
        ]
      },
      {
        path: 'training',
        component: AcademicTrainingComponent,
        children: [
          {
            path: 'study',
            component: StudyComponent,
            outlet: 'study'
          },
        ]
      },
      {
        path: 'laboral-experience',
        component: LaboralExperienceComponent,
        children: [
          {
            path: 'job',
            component: JobComponent,
            outlet: 'job'
          },
        ]
      },
    ]
  },
  {
    path: 'company',
    component: ProfileCompanyComponent
  },
  {
    path: '**',
    redirectTo: 'student'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
