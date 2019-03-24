import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Offer} from '../../../../shared/models/offer';
import {OffersService} from '../../../../shared/services/offers.service';

@Component({
  selector: 'app-offers-student-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  offer: Offer;

  constructor(
    private offersService: OffersService
  ) {}

  ngOnInit() {
    this.offersService.getOffers()
      .subscribe(offers => {
        this.offer = offers[0];
        console.log(this.offer);
      });
  }

  subscribe() {
    // TODO
  }

  remove() {
    // TODO
  }

}
