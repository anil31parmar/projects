import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  apiUrl = 'https://node-initial-hitesh.herokuapp.com/v1';
  constructor(private http : HttpClient, private activatedRoute:ActivatedRoute) {}

  getUserData(): Observable<any>{
    return this.http.get(this.apiUrl + '/users');
  }

  postData(addedData:any): Observable<any>{
    console.log(addedData);
    let API_URL = `${this.apiUrl}/users`;
    return this.http.post(API_URL,addedData);
  }

  updateData(id: any, data: any): Observable<any>{
    let API_URL = `${this.apiUrl}/users/${id}`;
    return this.http.patch(API_URL, data);
  }

  GetId(id: any): Observable<any> {
    let API_URL = `${this.apiUrl}/users/${id}`;
    return this.http.get(API_URL)
    // .pipe(
    //   map((res: any) => {
    //     return res || {};
    //   }));
  }

  deteleUser(id:any): Observable<any>{
    let API_URL = `${this.apiUrl}/users/${id}`;
    return this.http.delete(API_URL);
  }

  showDetails(id:any): Observable<any>{
    let API_URL = `${this.apiUrl}/users/${id}`;
    return this.http.get(API_URL);
  }
}
