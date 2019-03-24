import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { DetailComponent } from './student/detail/detail.component';
import { CompanyComponent } from './company/company.component';
import {StudentComponent} from './student/student.component';
import {OfferComponent} from './company/offer/offer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularEditorModule} from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    OffersComponent,
    StudentComponent,
    DetailComponent,
    CompanyComponent,
    OfferComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    AngularEditorModule,
    ReactiveFormsModule
  ]
})
export class OffersModule { }
