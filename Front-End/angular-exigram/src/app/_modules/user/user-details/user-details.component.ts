import { Component, OnInit, SecurityContext, ChangeDetectorRef } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userParam: string;
  activeUser: User;
  selectedUser: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, public domSanitizationService: DomSanitizer, private authService: AuthService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.userService.getActiveUser().subscribe(
      data => this.activeUser = data, error => console.log(error)
    );

    this.userService.getUser(this.getParamUrl()).subscribe(
      data => {
        this.selectedUser = data;
        this.isLoaded();
        console.log(data);
      }, error => console.log(error)
    )
  }

  getSafeUrl() {
    return this.domSanitizationService.bypassSecurityTrustResourceUrl("data:image/png;base64, " + this.selectedUser.userImage);     
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
    if(this.selectedUser != null){
      return true;
    }
    else return false;
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
