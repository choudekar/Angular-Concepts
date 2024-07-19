import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  title = 'Angular15';
  price = 100;

  myNumber: number = 123.9876568567;

  userDetails = {
    fullName: 'John Doe'
  }
  appService: AppService = inject(AppService);

  users: any[] = [];

  user$!: Observable<any>;

  cTime = Date.now();


  constructor() {
    this.appService.getUser().subscribe(data => {
      this.users = data;
    }),
      this.user$ = this.appService.getUser();
  }

  listings: { id: number, title: string }[] = [
    {
      id: 1,
      title: 'IT Solutions'
    },
    {
      id: 2,
      title: 'Tech Systems'
    },
    {
      id: 3,
      title: 'App Makers'
    },
    {
      id: 4,
      title: 'Software Solutions'
    },
    {
      id: 5,
      title: 'Web Solutions'
    }
  ]
  sortBy = '';

  getTemp(val: number) {
    console.log("get Temp");
    return val - 273.15;
  }


}

function sum(num1: number, num2: number) {
  return num1 + num2;
}
console.log(sum(100, 200));

sum(100, 200);
function sumPlusTime(num1: number) {
  return num1 + Date.now();
}
console.log(sumPlusTime(100));

sumPlusTime(100);
