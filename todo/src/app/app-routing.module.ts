import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './MyComponents/add-item/add-item.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { EditModalComponent } from './MyComponents/edit-modal/edit-modal.component';
import { TodoDetailsComponent } from './MyComponents/todo-details/todo-details.component';

const routes: Routes = [
  { path: 'todo', component: TodoItemComponent },
  { path: 'create-todo', component: AddItemComponent },
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'update-todo/:id', component: EditModalComponent },
  { path: 'todo-details/:id', component: TodoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
