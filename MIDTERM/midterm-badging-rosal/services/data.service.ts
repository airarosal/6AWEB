import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

  public postsSubject = new BehaviorSubject<any[]>([]);
  posts$ = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadPosts() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.postsSubject.next(data));
  }
}
