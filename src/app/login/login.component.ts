import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Roles } from '../models/enums/roles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Qui est-ce ?';
  formulaire: FormGroup;

  LoginFormControl = new FormControl('', [
    Validators.required,
  ]);

  PswFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private _loginService: LoginService,
    public _router: Router,
    private _authService: AuthService,

  ) { }

  ngOnInit(): void {
    if (this._authService.isLoggedIn) {
      this._router.navigate(['']);
    }

    this._authService.setLoggedInManager(false);
    this._authService.logOut();
    localStorage.removeItem('user');
    this.createForm();

  }

  createForm() {
    this.formulaire = new FormGroup({
      login: this.LoginFormControl,
      psw: this.PswFormControl
    });
  }

  async onSubmit() {
    if (this.formulaire.valid) {
      try {
        console.log('submitting');
        const user = await this._loginService.Authenticate(this.LoginFormControl.value, this.PswFormControl.value);
        localStorage.setItem('user', JSON.stringify(user));

        const utilisateur = await this._loginService.getUtilisateur();

        // Ecran SuperAdmin
        if (utilisateur.utilisateurRoles.some(mr => mr.role.name === 'SuperAdmin')) {
          this._router.navigate(['super_admin']);
        } else {

          if (utilisateur.utilisateurRoles.some(mr => mr.role.name === Roles.Manager)) {
            this._authService.setLoggedInManager(true);
          }

          console.log('Form Submitted!');
          this._authService.setLoggedIn();
          this._router.navigate(['home']);
        }
      } catch (error) {
        console.log(error);
        this._authService.logOut();
        // this.showFailure();

      }
    }
  }

}
