import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_modules/authentication/login/login.component';
import { RecoverPasswordComponent } from './_modules/authentication/recover-password/recover-password.component';
import { CreateUserComponent } from './_modules/user/create-user/create-user.component';
import { ErrorPageComponent } from './_modules/dashboard/error-page/error-page.component';
import { UserListComponent } from './_modules/user/user-list/user-list.component';
import { UpdateUserComponent } from './_modules/user/update-user/update-user.component';
import { UserDetailsComponent } from './_modules/user/user-details/user-details.component';
import { AdminComponent } from './_modules/admin/admin.component';
import { AuthGuardService } from './_guards/auth-guard.service';
import { DashboardComponent } from './_modules/dashboard/dashboard/dashboard.component';
import { PostAuthGuardService } from './_guards/post-auth-guard.service';
import { SearchComponent } from './_modules/search/search.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'error', component: ErrorPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recover', component: RecoverPasswordComponent }, //canActivate: PostAuthGuardService
  { path: 'create', component: CreateUserComponent }, //canActivate: PostAuthGuardService
  { path: 'dashboard', component: DashboardComponent },  //canActivate: AuthGuardService
  { path: 'admin', component: AdminComponent}, //canActivate: AuthGuardService
  { path: 'users', component: UserListComponent }, //canActivate: AuthGuardService
  { path: 'update/:username', component: UpdateUserComponent }, //canActivate: AuthGuardService
  { path: 'details/:username', component: UserDetailsComponent }, //canActivate: AuthGuardService
  { path: 'search/:username', component: SearchComponent }, //canActivate: AuthGuardService
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardService, PostAuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
