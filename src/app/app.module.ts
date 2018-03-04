import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { TodoInpComponent } from './todo-inp/todo-inp.component';
import { HeaderComponent } from './header/header.component';
import { TodoService } from './todo.service';
import { TodoDataService } from './todo-inp/todo-data.service';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoInpComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService, TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
