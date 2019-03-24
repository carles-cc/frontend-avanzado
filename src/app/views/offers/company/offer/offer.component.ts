import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-offers-company-detail',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  offerForm = this.fb.group({
    offer: this.fb.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      description: ['', Validators.required],
    }),
    place: this.fb.group({
      province: ['', Validators.required],
      city: ['', Validators.required],
    }),
    target: this.fb.group({
      family: ['', Validators.required],
    }),
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
