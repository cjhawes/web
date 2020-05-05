import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToDoList } from 'src/app/Models/to-do-list.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor(
    private http: HttpClient
  ) { }

  getToDoList(): Observable<ToDoList> {
    return this.http.get<ToDoList>('http://localhost:4201/api/'); // edit
  }
}
