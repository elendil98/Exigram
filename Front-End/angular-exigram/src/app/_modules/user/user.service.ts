import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/exigram-crud/users';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/get/${username}`);
  }

  getAllUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, user); 
  }

  updateUser(user: User): Observable<void> {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken(),
    });
    let options = {headers: httpHeaders};
    return this.http.post<void>(`${this.baseUrl}/update`, user, options);
  }

  updateUserPassword(user: User): Observable<void> {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken(),
    });
    let options = {headers: httpHeaders};
    return this.http.put<void>(`${this.baseUrl}/update/password`, user, options);
  }

  deleteSelectedUser(user: User): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/remove`, user);
  }

  recoverUser(user: User): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/recover`, user);
  }

}
