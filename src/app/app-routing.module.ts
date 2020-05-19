import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddActiviteComponent } from './add-activite/add-activite.component';
import { LoginComponent } from './login/login.component';
import { ImportComponent } from './import/import.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'addAct', component: AddActiviteComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'import', component: ImportComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
