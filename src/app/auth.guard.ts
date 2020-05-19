import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UtilisateurService } from './services/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private _utilisateurService: UtilisateurService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    const currentTeamMember = this._utilisateurService.getUtilisateur();
    if (currentTeamMember) {
      if (this.auth.isLoggedIn) {
        return true;

        // if (!next.data.roles) {
        //   return true;
        // }
        // if (next.data.roles.some(r => r === Roles.Manager)
        //   && currentTeamMember.memberRoles.some(mr => mr.role.name === Roles.Manager)) {
        //   // role not authorised so redirect to home page
        //   return true;
        // }
      }
      this.router.navigate(['login']);
      return false;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
