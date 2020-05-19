import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;
  private loggedInManagerStatus = false;

  constructor() { }

  get isLoggedInManager() {
    if (JSON.parse(localStorage.getItem('user')).isManager === true) {
      return true;
    } else {
      return false;
    }
  }

  setLoggedInManager(value: boolean) {
    this.loggedInManagerStatus = value;
  }

  get isLoggedIn() {
    if (localStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }
  }

  setLoggedIn() {
    this.loggedInStatus = true;
  }

  logOut() {
    this.loggedInStatus = false;
    localStorage.removeItem('user');
  }

}
