import { Component, OnInit, SecurityContext, ChangeDetectorRef } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from '../../authentication/auth.service';
import { Observable } from 'rxjs';
import { Post } from '../../post/post';
import { PostService } from '../../post/post.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userParam: string;
  activeUser: User;
  selectedUser: User;
  posts: Observable<Post[]>;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router, private userService: UserService, public domSanitizationService: DomSanitizer, private authService: AuthService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.userService.getActiveUser().subscribe(
      data => this.activeUser = data, error => console.log(error)
    );

    this.userService.getUser(this.getParamUrl()).subscribe(
      data => {
        this.selectedUser = data;
        this.posts = this.postService.getAllUserPost(this.selectedUser);
        this.isLoaded();
        console.log(data);
      }, error => console.log(error)
    )
  }

  getSafeUrl() {
    return this.domSanitizationService.bypassSecurityTrustResourceUrl("data:image/png;base64, " + this.selectedUser.userImage);     
  }

  getSafePostUrl(post: Post) {
    return this.domSanitizationService.bypassSecurityTrustResourceUrl("data:image/png;base64, " + post.postImage);     
  }

  getParamUrl() {
    this.route.paramMap.subscribe(params => {
      this.userParam = params.get("username");
      console.log(params);
      }, error => console.log(error)
    )
    return this.userParam;
  }

  isActiveUser() {
    if(this.activeUser.userDto.username == this.selectedUser.userDto.username) {
      return true;
    }
    else {
      return false;
    }
  }

  isLoaded() {
    if(this.selectedUser != null){
      return true;
    }
    else return false;
  }

  goToSelectedPost(post: Post) {
    this.router.navigate(['details', this.userParam, post.id]);
  }

  goToUserUpdate() {
    this.router.navigate(['update', this.userParam]);
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

  goToUser(username: string) {
    this.redirectTo('details/' + username);
  }

  logout() {
    this.authService.logout();
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

}
