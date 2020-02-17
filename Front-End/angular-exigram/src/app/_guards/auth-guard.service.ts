import { Injectable } from '@angular/core';
import { AuthService } from '../_modules/authentication/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isAuthenticated()){
      return Promise.resolve(true);
    }
    else {
      // se non è attivo naviga alla pagina di login
      this.router.navigate(['/login']);
      // Posso salvare il reindirizzamento url così dopo l'autenticazione
      // Posso ritornare alla pagina richiesta con indietro (browser back button)
      // Non è importante adesso dato che l'autenticazione è necessaria per navigare nel sito
      return Promise.resolve(false);
    }
  }
}
