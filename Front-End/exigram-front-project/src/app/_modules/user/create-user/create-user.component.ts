import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../user';
import { UserService } from '../../../_services/user.service';

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
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.user).subscribe(
      data => console.log(data), error => console.log(error)
    );
    this.user = new User();
    this.goBack();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack() {
    this.router.navigate(['/login']);
  }

}
