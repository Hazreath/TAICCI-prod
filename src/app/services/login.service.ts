import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Utilisateur } from '../Models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static readonly JSON_USERKEY : 'user';
  static readonly JSON_USER_NAME : 'name';
  current_user : Utilisateur;
  constructor(private http: HttpService) { }

  Authenticate(email: string, password: string) {
    const data: { email: string, password: string } = { email, password };
    
    return this.http.post<any>('login/Authenticate', data);
  }

  getUtilisateur() {
    return this.http.post<Utilisateur>('login/GetUtilisateur', null);
  }

  getUtilisateurByName(name : string) {
    return this.http.get('login/getbyname',name);
  }

  private getUtilisateurByEmail(mail : string) {
   
    return this.http.get('login/GetByEmail',mail);
  }

  getLoggedUtilisateur() {
    debugger;
    var n = JSON.parse(localStorage.
      getItem('user'));
    var user = new Utilisateur();
    user.name = n['name'];
    return n['name'];
  }
}
