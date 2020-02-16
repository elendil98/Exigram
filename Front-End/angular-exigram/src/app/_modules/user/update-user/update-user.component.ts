import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userParam: string;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private authService: AuthService, public domSanitizationService: DomSanitizer) { }

  ngOnInit() {
    this.userService.getUser(this.getParamUrl()).subscribe(
      data => {
        this.user = data;
        this.isLoaded();
        console.log(data);
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.userService.updateUser(this.user).subscribe(
      data => console.log(data), error => console.log(error)
    );
    this.goToUser();
  }

  onSubmitPassword() {
    this.userService.updateUserPassword(this.user).subscribe(
      data => console.log(data), error => console.log(error)
    );
    this.goToUser();
  }
  

  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      data => console.log(data), error => console.log(error)
    );
  }

  getSafeUrl() {
    return this.domSanitizationService.bypassSecurityTrustResourceUrl("data:image/png;base64, " + this.user.userImage);     
  }

  getParamUrl() {
    this.route.paramMap.subscribe(params => {
      this.userParam = params.get("username");
      console.log(params);
      }, error => console.log(error)
    )
    return this.userParam;
  }

  isLoaded() {
    if(this.user != null){
      return true;
    }
    else return false;
  }

  goToUser() {
    this.router.navigate(['users', this.getParamUrl()]);
  }

  logout() {
    this.authService.logout();
  }

}


