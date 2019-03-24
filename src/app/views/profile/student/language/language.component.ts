import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-student-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  private languageForm = this.fb .group({
    language: ['', Validators.required],
    other: [''],
    level: ['', Validators.required],
    date: ['', Validators.required],
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
