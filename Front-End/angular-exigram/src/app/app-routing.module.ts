import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_modules/authentication/login/login.component';
import { UserListComponent } from './_modules/user/user-list/user-list.component';
import { CreateUserComponent } from './_modules/user/create-user/create-user.component';
import { UpdateUserComponent } from './_modules/user/update-user/update-user.component';
import { UserDetailsComponent } from './_modules/user/user-details/user-details.component';
import { RecoverPasswordComponent } from './_modules/authentication/recover-password/recover-password.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full' },
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserListComponent },
  {path: 'recover', component: RecoverPasswordComponent},
  {path: 'create', component: CreateUserComponent },
  {path: 'update/:id', component: UpdateUserComponent },
  {path: 'details/:id', component: UserDetailsComponent }
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
