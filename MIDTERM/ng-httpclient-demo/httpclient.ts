import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Quotes } from './quotes.model';

@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getQuotesRemotely(): Observable<Quotes[]> {
        return this.http.get<Quotes[]>('https://dummyjson.com/quotes');
      }
}
