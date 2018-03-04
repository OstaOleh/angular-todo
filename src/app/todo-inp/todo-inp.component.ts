import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoDataService } from './todo-data.service';


@Component({
  selector: 'app-todo-inp',
  templateUrl: './todo-inp.component.html',
  styleUrls: ['./todo-inp.component.sass']
})
export class TodoInpComponent implements OnInit {
  form: FormGroup = new FormGroup({
    'inpTask': new FormControl(null, Validators.required)
  })
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.todoService.addTask(this.form.value.inpTask);
      this.form.reset();
    }
  }
 
  completeAllTasks() {
    this.todoService.completeAllTasks();
  }
}
