import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  image: any;
  username: string;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.user = new User();
    this.route.paramMap.subscribe(params => 
         this.username = params.get("username")
      )

    this.userService.getUser(this.username).subscribe(
      data => {
        this.user = data;
        console.log(data);
      }, error => console.log(error)
    )
  }

  

}
