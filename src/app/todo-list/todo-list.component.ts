import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import { Task } from '../task.model';
import { TodoDataService } from '../todo-inp/todo-data.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})

export class TodoListComponent implements OnInit {
  show: string = 'all';
  tasks: Task[];
  empty: boolean;
  isCompleted: boolean;
  count: number;


  constructor(private todoService: TodoService,
              private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.todoService.setTasks(this.todoDataService.checkLS())
    this.tasks = this.todoDataService.checkLS();
    
    this.count = this.todoService.countNotCompleted();
    this.todoService.returnedChangedTask.subscribe(tasks => {
      this.tasks = tasks
      this.tasks.length ? this.empty = false : this.empty = true;
      this.isCompleted = this.todoService.isCompleted();
      this.count = this.todoService.countNotCompleted();
    })
  }

  deleteCompeted() {
   this.todoService.deleteCompleted();
 }

 showAll() {
  this.show = 'all';
 }

 showCompleted() {
  this.show = 'completed';
 }

 showActive() {
  this.show = 'active';
 }

}
