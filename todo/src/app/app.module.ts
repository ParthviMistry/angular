import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddItemComponent } from './MyComponents/add-item/add-item.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { EditModalComponent } from './MyComponents/edit-modal/edit-modal.component';
import { TodoDetailsComponent } from './MyComponents/todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    AddItemComponent,
    HomeComponent,
    EditModalComponent,
    TodoDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
