import { Component, OnInit } from '@angular/core';
import {OffersService} from '../../../shared/services/offers.service';
import {Offer} from '../../../shared/models/offer';

@Component({
  selector: 'app-offers-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  offers: Offer[];

  constructor(
    private offersService: OffersService
  ) { }

  ngOnInit() {
    this.offersService.getOffers()
      .subscribe(offers => {
        this.offers = offers;
        console.log(this.offers);
      });
  }

}
