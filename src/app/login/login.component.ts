import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() sendFullname: EventEmitter<string> = new EventEmitter();
  @Output() sendPassword: EventEmitter<string> = new EventEmitter();

  // appService: AppService = inject(AppService);

  // constructor(private appServices: AppService) {

  // }

  constructor(@Inject(AppService) private appService: AppService) {

  }

  login(fullname: string, password: string) {
    console.log(fullname);
    this.sendFullname.emit(fullname);
    this.sendPassword.emit(password);

  }


  login2(fullname: string, password: string) {

    this.appService.userName = fullname;
    this.appService.password = password;
    console.log("inside login2");
    console.log(this.appService.userName);
    console.log(this.appService.password);


  }

}
