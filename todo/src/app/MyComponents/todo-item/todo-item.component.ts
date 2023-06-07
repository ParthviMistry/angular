import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Todo } from 'src/app/types';
import { TodoService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  todoData: Todo[] | undefined;
  deleteId: any;

  constructor(private router: Router, private todoService: TodoService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getTodo();
  }

  private getTodo() {
    this.todoService.getTodoList().subscribe((data) => {
      this.todoData = data;
    });
  }

  todoDetails(id: any) {
    this.router.navigate(['todo-details', id]);
  }

  updateTodo(id: any) {
    this.router.navigate(['create-todo', id]);
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.deleteId).subscribe((data) => {
      this.getTodo();
      this.modalService.dismissAll();
    });
  }

  open(content: any, id: any) {
    this.deleteId = id;
    this.modalService.open(content, { ariaLabelledBy: 'delete-modal' });
  }
}
