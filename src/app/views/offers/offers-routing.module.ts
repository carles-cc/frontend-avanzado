import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OffersComponent} from './offers.component';
import {StudentComponent} from './student/student.component';
import {CompanyComponent} from './company/company.component';
import {DetailComponent} from './student/detail/detail.component';
import {OfferComponent} from './company/offer/offer.component';

const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: 'detail',
        component: DetailComponent,
        outlet: 'detail'
      },
    ]
  },
  {
    path: 'company',
    component: CompanyComponent,
    children: [
      {
        path: 'detail',
        component: OfferComponent,
        outlet: 'detail'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
