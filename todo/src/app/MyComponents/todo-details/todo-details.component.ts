import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../todo-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent {
  id: any | undefined;
  todoData: Todo | undefined;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.todoData = new Todo();
    this.todoService.getTodoById(this.id).subscribe((data) => {
      this.todoData = data;
    });
  }
}
