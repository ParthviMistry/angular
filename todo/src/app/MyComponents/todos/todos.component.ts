import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        no: 1,
        title: 'tittle1',
        desc: 'desc1',
      },
      {
        no: 2,
        title: 'tittle2',
        desc: 'desc2',
      },
      {
        no: 3,
        title: 'tittle3',
        desc: 'desc3',
      },
    ];
  }
  deleteTodo(todo: Todo) {
    console.log('todos----', todo);
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
