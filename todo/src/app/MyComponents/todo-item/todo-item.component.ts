import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

import { Todo } from 'src/app/Todo';
import { TodoService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  todoData: Todo[] | undefined;

  constructor(private router: Router, private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodo();
  }

  private getTodo() {
    this.todoService.getTodoList().subscribe((data) => {
      this.todoData = data;
    });
  }

  todoDetails(id: any) {
    this.router.navigate(['todo-details', id]);
  }

  updateTodo(id: any) {
    this.router.navigate(['update-todo', id]);
  }

  deleteTodo(id: any) {
    this.todoService.deleteTodo(id).subscribe((data) => {
      this.getTodo();
    });
  }
}
