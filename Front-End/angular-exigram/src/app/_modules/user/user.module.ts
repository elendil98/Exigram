import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],

  exports: [
    UserDetailsComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],

  imports: [
    AppRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class UserModule { }
