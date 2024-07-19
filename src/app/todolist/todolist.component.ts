import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  currentPage: number = 1;
  pageSize: number = 5; // Number of todos per page
  todos: any[] = []; // Array to hold paginated todos

  constructor(private todoService: TodoserviceService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  // Method to load todos for the current page
  loadTodos(): void {
    this.todos = this.todoService.getPaginatedTodos(this.currentPage, this.pageSize);
  }

  // Method to handle page change event from pagination
  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadTodos();
  }

}
