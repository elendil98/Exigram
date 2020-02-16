import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostReportedComponent } from './post-reported/post-reported.component';

@NgModule({
  declarations: [
    CreatePostComponent,
    PostDetailsComponent,
    PostReportedComponent
  ],

  exports: [
    CreatePostComponent,
    PostDetailsComponent,
    PostReportedComponent
  ],

  imports: [
    AppRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class PostModule { }
