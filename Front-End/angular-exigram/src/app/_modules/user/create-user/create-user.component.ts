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
  submitted = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user.userDto = new UserDto();
  }

  onSubmit() {
    this.submitted = true;
    this.userService.createUser(this.user).subscribe(
      data => console.log(data), error => console.log(error)
    );
    this.user = new User();
    this.user.userDto = new UserDto();
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/login']);
  }

}
