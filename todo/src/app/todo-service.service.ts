import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseURL = 'http://localhost:3001/todo';

  constructor(private httpClient: HttpClient) {}

  getTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.baseURL}`);
  }

  createTodo(employee: Todo): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.baseURL}/${id}`);
  }

  updateTodo(id: number, employee: Todo): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteTodo(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
