import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/Todo';
import { TodoService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signupData: Signup = new Signup();
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private userService: TodoService) {}

  signupForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    state: [''],
    city: [''],
    zip: [''],
  });

  onSubmit() {
    this.submitted = true;
    return this.userService.createUser(this.signupData);
  }
}
