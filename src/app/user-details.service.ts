import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  public getUserDetail(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`).pipe(map((response) =>
      response));
  }
}
