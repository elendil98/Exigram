import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserDto } from '../../user/userDto';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user.userDto = new UserDto(); 
  }

  onSubmit() {
    this.userService.recoverUser(this.user).subscribe(
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
