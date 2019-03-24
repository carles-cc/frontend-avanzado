import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile-student-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  studyForm = this.fb.group({
    type: [''],
    university: this.fb.group({
      center: [''],
      title: [''],
      date: [''],
      bilingual: [false],
      certificate: ['']
    }),
    cycle: this.fb.group({
      center: [''],
      family: [''],
      degree: [''],
      cycle: [''],
      date: [''],
      dual: [false],
      bilingual: [false],
      certificate: ['']
    })
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  save() {
    // TODO
  }

}
