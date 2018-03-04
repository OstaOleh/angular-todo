import { Injectable } from '@angular/core';

import { Task } from './task.model';
import { Subject } from 'rxjs/Subject';
import { TodoDataService } from './todo-inp/todo-data.service';

@Injectable()
export class TodoService {
  changedTask: Subject<Task[]> = new Subject();
  returnedChangedTask = this.changedTask.asObservable();
  count: number = 0;
  tasks: Task[] = []

  constructor(private todoDataService: TodoDataService) { }

  getTasks() {
    return this.tasks
  }

  setTasks(tasks: Task[]) {
    this.tasks = tasks;
  }
  completeTask(task: Task) {
    for (let _task of this.tasks) {
      if (_task.task === task.task) {
        _task.done = !_task.done;
      }
    }
    this.todoDataService.clearLS();
    this.todoDataService.addTasksToLS(this.tasks)
    this.changedTask.next(this.tasks)
  }

  deleteTask(task: Task) {
    let i = this.tasks.indexOf(task)
    this.tasks.splice(i, 1)
    this.todoDataService.deleteTaskFromLS(task);
    this.changedTask.next(this.tasks)
  }

  addTask(name) {
    this.tasks.push(new Task(name));
    this.todoDataService.addToLs(new Task(name));
    this.changedTask.next(this.tasks)
  }

  completeAllTasks() {
    for (let task of this.tasks) {
      task.done = true;
    }
    this.todoDataService.clearLS();
    this.todoDataService.addTasksToLS(this.tasks)
    this.changedTask.next(this.tasks)
  }

  deleteCompleted() {
    this.tasks = this.tasks.filter(task => {
      return !task.done
    })
    this.todoDataService.clearLS();
    this.todoDataService.addTasksToLS(this.tasks)
    this.changedTask.next(this.tasks)
  }

  isCompleted() {
    for (let task of this.tasks) {
      if (task.done) {
        return true
      }
    }
  }

  countNotCompleted() {
    let count = this.tasks.reduce((count, task) => {
      return task.done ? count : count + 1
    }, 0)
    return count
  }
}
