import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/exigram-crud/users';

  constructor(private http: HttpClient) {}

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
    let httpHeaders = new HttpHeaders();
    httpHeaders.append('Authorization', 'Bearer ' + user.userDto.token);
    let options = {headers: httpHeaders};
    return this.http.post<void>(`${this.baseUrl}/update`, user, options);
  }

  updateUserPassword(user: User): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/update/password`, user);
  }

  deleteSelectedUser(user: User): Observable<void> {
    // Maybe need to be used http.delete1
    return this.http.post<void>(`${this.baseUrl}/remove`, user);
  }

  recoverUser(user: User): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/recover`, user);
  }

}
