import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Utilisateur } from '../Models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private _http: HttpService) {}

  getUtilisateur() {
    return this._http.post<Utilisateur>('login/GetUtilisateur', null);
  }
}
