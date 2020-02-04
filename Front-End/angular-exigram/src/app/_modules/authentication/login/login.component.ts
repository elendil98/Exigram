import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { UserDto } from '../../user/userDto';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user.userDto = new UserDto();
  }

  onSubmit() {
    this.submitted = true;
    this.userService.login(this.user).subscribe(
      data => console.log(data), error => console.log(error) 
    );
    this.user = new User();
    this.user.userDto = new UserDto();

  }

  register() {
    this.router.navigate(['create']);
  }

  recover() {
    this.router.navigate(['recover'])
  }

}
