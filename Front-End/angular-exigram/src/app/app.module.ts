import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_modules/authentication/login/login.component';
import { AdminComponent } from './_modules/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { RecoverPasswordComponent } from './_modules/authentication/recover-password/recover-password.component';
import { UserModule } from './_modules/user/user.module';
import { ErrorPageComponent } from './_modules/dashboard/error-page/error-page.component';
import { DashboardComponent } from './_modules/dashboard/dashboard/dashboard.component';
import { SearchComponent } from './_modules/search/search.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostReportedComponent } from './post-reported/post-reported.component';
import { UserReportedComponent } from './user-reported/user-reported.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    RecoverPasswordComponent,
    SearchComponent,
    ErrorPageComponent,
    DashboardComponent,
    PostDetailsComponent,
    PostReportedComponent,
    UserReportedComponent,
    CreatePostComponent,
    NotificationComponent
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
