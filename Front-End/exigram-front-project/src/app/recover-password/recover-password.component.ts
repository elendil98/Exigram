import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.save();
  }

  save() {
    this.userService.recoverUser().subscribe(
      data => console.log(data), error => console.log(error)
    );
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/login']);
  }

}
