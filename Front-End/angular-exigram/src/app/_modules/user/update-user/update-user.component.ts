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

  base64TextString = [];
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
      data => {console.log(data); 
        this.redirectTo('update/' + this.user.userDto.username)}, error => console.log(error)
    );
  }

  onSubmitPassword() {
    this.userService.updateUserPassword(this.user).subscribe(
      data => console.log(data), error => console.log(error)
    );
    this.goToUser(this.user.userDto.username);
  }

  onUploadChange(evt: any) {
    let file = evt.target.files[0];
    if (file) {
      let reader = new FileReader();
      let me = this;

      reader.readAsDataURL(file);
      reader.onload = function() {
        me.user.userImage = reader.result.toString().split(',')[1];
        me.userService.updateUserImage(me.user).subscribe(
          data => console.log(data), error => console.log(error)
        );
        console.log(reader.result);     
        me.goToUser(me.user.userDto.username);
      }; reader.onerror = function(error) {
        console.log(error);
        }
    }
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
    if(this.user != null && this.user.userDto != null){
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

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

  logout() {
    this.authService.logout();
  }

}


