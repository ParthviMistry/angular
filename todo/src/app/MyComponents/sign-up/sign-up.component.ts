import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/types';
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
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    state: ['', [Validators.required]],
    city: ['', [Validators.required]],
    zip: ['', [Validators.required]],
  });

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      return this.userService.createUser(this.signupData);
    }
    return;
  }
}
