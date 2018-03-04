import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../../todo.service';
import { Task } from '../../task.model';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})

export class TodoItemComponent implements OnInit {
  @Input() task: Task;
  @Input() show: string;
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  completeTask(task: Task) {
    this.todoService.completeTask(task);
  }

  deleteTask(task: Task) {
    this.todoService.deleteTask(task);
  }

}
