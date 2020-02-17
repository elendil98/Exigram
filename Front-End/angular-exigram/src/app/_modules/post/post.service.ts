import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://localhost:8080/exigram-crud/post';

  constructor(private http: HttpClient, private authService: AuthService) {}

  createPost(post: Post): Observable<Object> {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken(),
    });
    let options = {headers: httpHeaders};
    return this.http.post(`${this.baseUrl}/create`, post, options);
  }

}
