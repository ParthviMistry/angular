import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  submitted = false;

  constructor(
    public fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  todoForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

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
    this.submitted = true;
    if (this.todoForm.valid) {
      return this.todoService.updateTodo(this.id, this.todoData).subscribe(
        (data) => {
          this.router.navigate(['/todo']);
        },
        (error) => console.log(error)
      );
    } else {
      return false;
    }
  }
}
