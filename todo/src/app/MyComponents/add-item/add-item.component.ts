import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Todo } from 'src/app/Todo';
import { TodoService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  todoData: Todo = new Todo();
  submitted = false;

  constructor(private router: Router, private todoService: TodoService, public fb: FormBuilder) {}

  todoForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],

    // fullName: this.fb.group({
    //   firstName: [''],
    //   lastName: [''],
    // }),
    // address: this.fb.group({
    //   street: [''],
    //   city: [''],
    //   cityName: [''],
    // }),
    // gender: [''],
    // PasswordValidation: this.fb.group({
    //   password: [''],
    //   confirmPassword: [''],
    // }),
    // addDynamicElement: this.fb.array([]),
  });

  onSubmit() {
    this.submitted = true;
    if (this.todoForm.valid) {
      return this.todoService.createTodo(this.todoData).subscribe(
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
