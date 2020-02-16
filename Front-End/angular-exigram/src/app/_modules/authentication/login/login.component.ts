import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { User } from '../../user/user';
import { UserDto } from '../../user/userDto';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user.userDto = new UserDto();
  }

  onSubmit() {
    this.authService.login(this.user).subscribe(
      data => {
        this.authService.validateToken(data);
        console.log(data);
      }, error => console.log(error)
    );
  }

  register() {
    this.router.navigate(['/create']);
  }

  recover() {
    this.router.navigate(['/recover'])
  }

}
