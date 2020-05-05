import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Research } from '../Models/research.model';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(
    private http: HttpClient
  ) { }

  getResearchPosts(): Observable<Research[]> {
    return this.http.get<Research[]>('http://localhost:4201/api/research');
  }
}
