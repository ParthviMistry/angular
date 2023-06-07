import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  submitted = false;
  id: any;
  isAddMode: boolean | undefined;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private todoService: TodoService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.todoService.getTodoById(this.id).subscribe(
        (data) => {
          this.todoData = data;
        },
        (error) => console.log(error)
      );
    }
  }

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
      if (this.isAddMode) {
        return this.todoService.createTodo(this.todoData);
      } else {
        return this.todoService.updateTodo(this.id, this.todoData).subscribe(
          (data) => {
            this.router.navigate(['/todo']);
          },
          (error) => console.log(error)
        );
      }
    } else {
      return false;
    }
  }
}
