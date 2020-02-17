import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../authentication/auth.service';
import { User } from '../../user/user';
import { Post } from '../post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  userParam: string;
  postParam: string;
  activeUser: User;
  selectedUser: User;
  post: Post;
  newPost: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router, private userService: UserService, public domSanitizationService: DomSanitizer, private authService: AuthService) { }

  ngOnInit() {
    this.userService.getUser(this.getUserParamUrl()).subscribe(
      data => {
        this.selectedUser = data;
        this.isLoaded();
        console.log(this.selectedUser);
      }, error => console.log(error)
    )

    this.newPost = new Post();
    this.userService.getActiveUser().subscribe(
      data =>{ 
        this.activeUser = data;
        console.log(this.activeUser);
      }, error => console.log(error)
    );

    this.postParam = this.getPostParamUrl();
    this.newPost.id = Number(this.postParam);
    this.postService.getPost(this.newPost).subscribe(
      data => {
        this.post = data;
        console.log('This post ='+this.post);
      }, error => console.log(error)
    )
  }

  onSubmit() {

  }

  getUserParamUrl() {
    this.route.paramMap.subscribe(params => {
      this.userParam = params.get("username");
      console.log(this.userParam);
      }, error => console.log(error)
    )
    return this.userParam;
  }

  getPostParamUrl() {
    this.route.paramMap.subscribe(params => {
      this.userParam = params.get("postid");
      console.log(params);
      }, error => console.log(error)
    )
    return this.postParam;
  }

  getSafePostUrl() {
    return this.domSanitizationService.bypassSecurityTrustResourceUrl("data:image/png;base64, " + this.post.postImage);     
  }

  isLoaded() {
    if(this.selectedUser != null){
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
