import { Component, OnInit } from '@angular/core';
import { ToDoListService } from 'src/app/services/projects/to-do-list/to-do-list.service';
import { ToDoList } from 'src/app/Models/to-do-list.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  list;

  constructor(
    private toDoListService: ToDoListService,
  ) { }

  ngOnInit(): void {
    this.list = this.toDoListService.getToDoList();
  }
}
