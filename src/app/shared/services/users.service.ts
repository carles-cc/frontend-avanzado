import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseurl = 'http://mybackend.com/api';
  usersEndpoint = '/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + this.usersEndpoint);
  }
}
