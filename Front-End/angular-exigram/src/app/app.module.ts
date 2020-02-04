import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_modules/authentication/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { RecoverPasswordComponent } from './_modules/authentication/recover-password/recover-password.component';
import { UserModule } from './_modules/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    RecoverPasswordComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
