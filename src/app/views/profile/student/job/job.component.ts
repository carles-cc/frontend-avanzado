import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-student-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  jobForm = this.fb .group({
    company: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    startDate: ['', Validators.required],
    endDate: [''],
    position: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    tasks: ['']
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
