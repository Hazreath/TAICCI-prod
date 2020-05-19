import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Activite } from '../models/activite';
import { TypeActivite } from '../models/typeActivite';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http: HttpService) { }

  async addActivite(activite: Activite) {
    return await this.http.post('activite/', activite);
  }

  async getActiviteById(id: number) {
    return await this.http.get('activite/', id).toPromise();
  }

  /// Retourne les activités appartenant au type argument
  async getActivitesByType(type: TypeActivite) {
    return await this.http.get('activite/type/' , type).toPromise();
  }

  async getAll() {
    return await this.http.get('activite', '').toPromise();
  }

  async getSearch(text : string){
    if (text.length != 0){
      return await this.http.get('activite/search/', text).toPromise();
    } else {
      return await this.http.get('activite', '').toPromise();
    }
  }
}
