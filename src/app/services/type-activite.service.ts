import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { TypeActivite } from '../models/typeActivite';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TypeActiviteService {

  constructor(private http: HttpService) { }

  async getAll() {
    
    return await this.http.get('typeactivite', '').toPromise();
  }
}
