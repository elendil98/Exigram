import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from '../userDto';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted: boolean;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user.userDto = new UserDto();
    this.submitted=false;
  }

  onSubmit() {
    if (this.user.userDto.username != this.user.userDto.email) {
      this.userService.createUser(this.user).subscribe(
        data => {
          this.goBack(); console.log(data);}, error => {this.submitted=true; console.log(error);}
      );
    }
    else {
      this.submitted=true;
    }
  }

  goBack() {
    this.router.navigate(['/login']);
  }

}
