import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  username: string;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.username = this.route.snapshot.params['username'];

    this.userService.getUser(this.username).subscribe(
      data => {
        console.log(data)
        this.user = data
      }, error => console.log(error)
    );
  }

  updateUser() {
    this.userService.updateUser(this.username, this.user).subscribe(
      data => console.log(data), error => console.log(error)
    );    
    this.user = new User();
    this.goToList();
  }

  onSubmit() {
    this.updateUser();
  }

  goToList() {
    this.router.navigate(['/users']);
  }

}


