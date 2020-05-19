import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Activite } from '../models/activite';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.api; // 'http://localhost:59621/api/';

  constructor(private http: HttpClient) { }

  get(url: string, data: any): any {
    return this.http.get(this.baseUrl + url + data);
  }

  // post(url: string, data: any) {
  //   return this.http.post<any>(this.baseUrl + url, data).toPromise();
  // }

  post<T>(url: string, data: any): Promise<T> {
    return this.http.post<T>(this.baseUrl + url, data).toPromise();
  }
}
