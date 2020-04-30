import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Image } from '../Models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http: HttpClient
  ) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>('http://localhost:4201/api/image');
  }

  getMostRecentImages(): Observable<Image[]> {
    return this.http.get<Image[]>('http://localhost:4201/api/image/mostRecent');
  }

  getImage(id: number): Observable<Image> {
    return this.http.get<Image>(`http://localhost:4201/api/image/${id}`);
  }
}
