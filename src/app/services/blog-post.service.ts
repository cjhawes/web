import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../Models/blog-post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(
    private http: HttpClient
  ) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('http://localhost:4201/api/blogPost');
  }

  getBlogPost(id: number): Observable<BlogPost> {
    const url = `http://localhost:4201/api/blogPost/${id}`;
    return this.http.get<BlogPost>(url);
  }
}
