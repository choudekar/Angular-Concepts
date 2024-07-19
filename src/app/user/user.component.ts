import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  isSubmitted: boolean = false;
  users: any[] = [];
  appService: AppService = inject(AppService);
  myTimer: Observable<number> = timer(1000, 2000);
  mySubscription!: Subscription;
  constructor(private router: Router, private route: ActivatedRoute) {

    this.route.data.subscribe(data => {
      this.users = data["usersData"];
      console.log(data["api"]);

    }),
      this.mySubscription = this.myTimer.subscribe(val => console.log(val)
      )
  }

  canLeave() {
    return this.isSubmitted;
  }

  login(val: string) {
    //this.isSubmitted = true;
    this.router.navigate(['user', val])
  }
  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

}
