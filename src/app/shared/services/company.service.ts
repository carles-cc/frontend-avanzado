import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private mockCompany = {
    uid: 'amazingcompoany',
    name: 'Amazing Company',
    businessName: 'Amazing Company',
    cif: '12345678Z',
    address: 'Fake Street, 123',
    province: 'Barcelona',
    city: 'Artés',
    url: 'http://amazing-company.com',
    contactName: 'Carles Canellas',
    contactPhone: '123456789',
    contactEmail: 'carles_cc@uoc.edu'
  };

  constructor(
    private http: HttpClient
  ) { }

  loadProfile(): Observable<any> {
    return of(this.mockCompany as any);
  }

}
