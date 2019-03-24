import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  baseurl = 'http://mybackend.com/api';
  usersEndpoint = '/offers';

  constructor(
    private http: HttpClient
  ) { }

  getOffers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + this.usersEndpoint);
  }
}
