import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {



  todos: any[] = []; // Array to hold todo data

  constructor() { }

  // Method to fetch todo data (mocked for simplicity)
  fetchTodos(): void {
    // Fetch todos from API or generate mock data
    this.todos = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
      // More todos...
    ];
  }

  // Method to get paginated todos based on page and page size
  getPaginatedTodos(page: number, pageSize: number): any[] {
    const startIndex = (page - 1) * pageSize;
    return this.todos.slice(startIndex, startIndex + pageSize);
  }
}
