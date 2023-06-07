import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './MyComponents/add-item/add-item.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { TodoDetailsComponent } from './MyComponents/todo-details/todo-details.component';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { authGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'create-todo', component: AddItemComponent },
  { path: 'create-todo/:id', component: AddItemComponent },
  { path: 'todo', component: TodoItemComponent },
  { path: 'todo-details/:id', component: TodoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
