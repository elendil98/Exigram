import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/exigram-crud/users';

  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  recoverUser(user: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/recover`, user);
  }

}
