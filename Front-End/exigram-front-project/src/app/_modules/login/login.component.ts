import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthenticationService } from '../../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mainUrl = 'http://localhost:8080/exigram-crud';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor( private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private httpClient: HttpClient) {
    if (this.authenticationService.currentUserValue) {
      // Ritorna alla home se già loggato
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
    // prende l'url di rutorno dai parametri route oppure '/' di default
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Si ferma qui se il form non è valido
    if (this.loginForm.invalid) {
        return;
    }

    /*
    this.loading = true;
    this.authenticationService.login(this.formControls.username.value, this.formControls.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.loading = false;
            });
    */
  }

  getUser() {
    return this.httpClient.get<User>(this.mainUrl);
  }

  register() {
    this.router.navigate(['create']);
  }

  recover() {
    this.router.navigate(['recover'])
  }

}
