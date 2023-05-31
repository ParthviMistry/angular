import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from 'src/app/Todo';
import { TodoService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  todoData: Todo = new Todo();

  constructor(private router: Router, private todoService: TodoService) {}

  onSubmit() {
    this.todoService.createTodo(this.todoData).subscribe(
      (data) => {
        this.router.navigate(['/todo']);
      },
      (error) => console.log(error)
    );
  }
}
