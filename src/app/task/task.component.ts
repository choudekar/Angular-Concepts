import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  registrationForm!: FormGroup;

  courses: string[] = ['JAVA', 'ANGULAR', 'REACT'];
  banks: string[] = ['SBI', 'ICICI', 'HDFC'];
  paymentModes: string[] = ['Credit Card', 'Debit Card', 'Net Banking'];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")], []],
      lastName: ['', [Validators.required, Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")], []],
      course: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      bankName: ['', Validators.required],
      paymentMode: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
    });
  }

  // usernameValidator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const value: string = control.value;

  //     // Define your validation logic here
  //     const valid = /^[a-zA-Z0-9_]+$/.test(value); // Example: Only allows alphanumeric characters and underscores
  //     //const valid2 = "advaithkumar"
  //     return valid ? null : { invalidUsername: true };
  //   };
  // }

  onSubmit() {
    if (this.registrationForm.valid) {

      console.log(this.registrationForm.value);

      console.log(this.registrationForm.get('firstName')?.value);


    } else {

      this.registrationForm.markAllAsTouched();
    }
  }
  passwordValidator(control: FormControl) {

    const passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,}$/;

    if (!passwordPattern.test(control.value)) {
      return { invalidPassword: true };
    }
    return null;
  }

}
