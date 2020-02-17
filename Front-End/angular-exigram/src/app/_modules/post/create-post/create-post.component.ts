import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: Post;
  activeUser: User;
  imageSubmitted: boolean;
  submitted: boolean;

  constructor(private router: Router, private authService: AuthService, private userService: UserService, private postService: PostService) { }

  ngOnInit() {
    this.userService.getActiveUser().subscribe(
      data => {this.activeUser = data; 
        this.post = new Post();
        this.isLoaded();
      }, error => console.log(error)
    );

  }

  onSubmit() {
    console.log(this.post);
    this.postService.createPost(this.post).subscribe(
      data => {this.goToDashboard();
      }, error =>  {this.submitted=true; console.log(error);}
    )
  }

  onUploadChange(evt: any) {
    let file = evt.target.files[0];
    if (file) {
      let reader = new FileReader();
      let me = this;

      reader.readAsDataURL(file);
      reader.onload = function() {
        me.post.postImage = reader.result.toString().split(',')[1];
        me.post.user = me.activeUser;
        console.log(me.post);
        me.imageSubmitted = true;
        console.log(reader.result);     
      }; reader.onerror = function(error) {
        console.log(error);
        }
    }
  }

  isLoaded() {
    if(this.activeUser != null){
      return true;
    }
    else return false;
  }

  goToUser(username: string) {
    this.router.navigate(['details', username]);
  }
  
  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

  logout() {
    this.authService.logout();
  }

}
