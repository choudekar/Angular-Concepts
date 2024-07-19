import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos: any[] = [];
  appService: AppService = inject(AppService);

  constructor() {
    this.appService.getTodos().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.todos = data;
        },
        error: (error) => { console.log(error); },
        complete: () => { console.log("completed todos data"); }
      }
    )
  }
}
