import { Injectable } from '@angular/core';
import { AuthService } from '../_modules/authentication/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostAuthGuardService {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/dashboard']);
      return Promise.resolve(false);
    }
    else {
      return Promise.resolve(true);
    }
  }

}
