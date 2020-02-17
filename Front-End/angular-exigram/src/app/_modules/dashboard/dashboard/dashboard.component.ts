import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { AuthService } from '../../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  activeUser: User;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userService.getActiveUser().subscribe(
      data => this.activeUser = data, error => console.log(error)
    );
  }


  goToUser(username: string) {
    this.router.navigate(['details', username]);
  }
  isLoaded() {
    if(this.activeUser != null){
      return true;
    }
    else return false;
  }

  logout() {
    this.authService.logout();
  }

}
