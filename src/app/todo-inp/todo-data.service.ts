import { Injectable } from "@angular/core";
import { TodoService } from "../todo.service";

@Injectable()
export class TodoDataService {

    constructor() {}

    checkLS() {
        let ls;
        if (localStorage.getItem('tasks')=== null) {
            ls = [];
        }else {
            ls = JSON.parse(localStorage.getItem('tasks'))
        }
        return ls
    }

    addToLs(task) {
        let ls = this.checkLS();
        ls.push(task)
        localStorage.setItem('tasks', JSON.stringify(ls));
    }

    addTasksToLS(tasks) {
        let ls = this.checkLS();
        ls.push(...tasks)
        localStorage.setItem('tasks', JSON.stringify(ls));
    }
    deleteTaskFromLS(task) {
        let ls = this.checkLS();
        let i = ls.indexOf(task)
        ls.splice(i, 1)
        localStorage.setItem('tasks', JSON.stringify(ls));
    }

    clearLS() {
        let ls = [];
        localStorage.setItem('tasks', JSON.stringify(ls));
    }

}