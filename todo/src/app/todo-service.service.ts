import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Signup, Todo } from './Todo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseURL = 'http://localhost:3001/api';
  isAuthenticate = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, public route: Router) {}

  //TODO
  getTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.baseURL}`);
  }

  createTodo(todo: Todo) {
    return this.httpClient.post(`${this.baseURL}`, todo).subscribe(
      (data) => {
        this.route.navigate(['/todo']);
      },
      (error) => console.log(error)
    );
  }

  getTodoById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.baseURL}/${id}`);
  }

  updateTodo(id: number, todo: Todo): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  //SIGNUP
  getUserList(): Observable<Signup[]> {
    return this.httpClient.get<Signup[]>(`${this.baseURL}/user`);
  }

  createUser(user: Signup) {
    this.httpClient.post(`${this.baseURL}/user`, user, { observe: 'response' }).subscribe((res) => {
      if (res) {
        this.isAuthenticate.next(true);
        this.route.navigate(['create-todo']);
      } else {
        this.route.navigate(['signup']);
      }
    });
    return false;
  }

  getUserById(id: number): Observable<Signup> {
    return this.httpClient.get<Signup>(`${this.baseURL}/user/${id}`);
  }

  updateUser(id: number, user: Signup): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/user/${id}`, user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/user/${id}`);
  }
}
