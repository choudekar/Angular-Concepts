import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-formspractice',
  templateUrl: './formspractice.component.html',
  styleUrls: ['./formspractice.component.css']
})
export class FormspracticeComponent {

  passwordMatching: boolean = true;
  qualification = "bachelor";
  about = '';
  @ViewChild('f') signUpForm!: NgForm;

  submitted: boolean = false;

  user = {
    email: "",
    username: "",
    passowrd: "",
    gender: "",
    qualification: ""
  }

  constructor() {


  }



  onSubmit() {
    this.submitted = true;
    console.log(this.signUpForm);
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.passowrd = this.signUpForm.value.password;
    this.user.gender = this.signUpForm.value.gender;
    this.user.qualification = this.signUpForm.value.qualification;
    this.signUpForm.reset();
  }

  fillValues() {
    this.signUpForm.form.patchValue({
      userData: {
        email: "harivardhan@gmail.com",
        username: "hari"
      },
      password: "pass"
    })
  }

  passwordCheck(pw: string, cpw: string) {
    if (pw == cpw) {
      this.passwordMatching = true;

    } else {
      this.passwordMatching = false;
    }
  }

}
