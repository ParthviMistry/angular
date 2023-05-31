import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/Todo';
import { TodoService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent {
  id: any;
  todoData: Todo = new Todo();

  constructor(private activeRoute: ActivatedRoute, private router: Router, private todoService: TodoService) {}

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];

    this.todoService.getTodoById(this.id).subscribe(
      (data) => {
        this.todoData = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.todoService.updateTodo(this.id, this.todoData).subscribe(
      (data) => {
        this.router.navigate(['/todo']);
      },
      (error) => console.log(error)
    );
  }
}
