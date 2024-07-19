import { Component, OnInit } from '@angular/core';
import { Todo } from '../Models/todo.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todoo',
  templateUrl: './todoo.component.html',
  styleUrls: ['./todoo.component.css']
})
export class TodooComponent implements OnInit {


  todo!: Todo;
  todos!: Todo[];

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.todo = new Todo;

  }

  // addTodo() {
  //   if (this.todo.id) {
  //     return;
  //   }
  //   //this.api.addTodo(this.todo);
  // }

  // getData() {
  //   console.log("get data");

  //   this.api.fetchData();
  // }


}
