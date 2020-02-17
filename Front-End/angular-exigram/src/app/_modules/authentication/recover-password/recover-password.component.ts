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
  submitted: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user.userDto = new UserDto(); 
    this.submitted=false;
  }

  onSubmit() {
    this.userService.recoverUser(this.user).subscribe(
      data => { 
        this.goBack(); console.log(data);
      }, error => {
        this.submitted=true; 
        console.log(error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/login']);
  }

}
