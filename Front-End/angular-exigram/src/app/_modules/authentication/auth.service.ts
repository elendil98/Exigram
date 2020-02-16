import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../user/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  
    private baseUrl = 'http://localhost:8080/exigram-crud/users';

    constructor(private http: HttpClient, private router: Router) {}

    clear() {
       localStorage.clear();
    }

    isAuthenticated(): boolean {
        if(localStorage.getItem('token') != null) {
            return true;
        }
        else { 
            return false; 
        }
    }

    login(user: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/login`, user);
    }

    validateToken(user: User) {
        localStorage.setItem('token', user.userDto.token);
        this.router.navigate(['dashboard']);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logout() {
        this.clear();
        this.router.navigate(['/login']);
    }

}