import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, delay, distinctUntilChanged, filter, map, sample } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  genders = ['male', 'female'];
  restrictedUsername = 'rajkumar';

  myForm: FormGroup
  //addressGroup: FormGroup;


  passwordMatching: boolean = false;
  nameRestricted: boolean = true;
  password = "";


  http: HttpClient = inject(HttpClient);

  fb: FormBuilder = inject(FormBuilder)

  constructor() {
    // this.myForm = new FormGroup({
    //   userName: new FormControl(""),
    //   password: new FormControl("")
    // }

    // )



    // this.addressGroup = this.fb.group({
    //   street: "",
    //   city: "",
    //   pin: ""
    // });





    // Subscribe to changes in 'sameAsPresent' checkbox



    this.myForm = this.fb.group({
      // userName: new FormControl(""),
      // password: new FormControl("")

      userName: ["", [Validators.required, Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$"), this.usernameValidator], this.userNameValidateJson.bind(this), this.isNameRestricted.bind(this)],
      email: ["", [Validators.required, Validators.email], [this.isEmailRestricted]],
      password: ["", [Validators.required, Validators.minLength(8), this.passwordValidator]],
      confirmPassword: new FormControl(""),
      gender: new FormControl(""),

      presentAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', Validators.required]
      }),
      permanentAddress: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      sameAsPresent: [false],




      rating: ['', this.ratingValidator],
      hobbies: new FormArray([]),
      //address: this.addressGroup,

      emails: this.fb.array([]),
      permAddress: ["", Validators.required],
      currentAddress: ["", Validators.required],
      same: ["", Validators.required]
    });

    this.myForm.statusChanges.subscribe(value => {
      console.log(value);
    }
    );
    this.myForm.valueChanges.subscribe(value => {
      console.log(value);

    });

    this.myForm.controls["userName"].valueChanges.subscribe(
      data => { console.log(data) }
    );

    this.myForm.controls["password"].valueChanges.subscribe(
      data => {
        if (data === this.myForm.value.confirmPassword) {
          this.passwordMatching = true;
        } else {
          this.passwordMatching = false;
        }
      }
    );

    this.myForm.controls["confirmPassword"].valueChanges.subscribe(data => {
      console.log("inside sub");
      console.log(data);
      console.log(this.myForm.value.password);

      if (this.myForm.value.password === data) {
        console.log("inside if");
        this.passwordMatching = true;
      } else {
        this.passwordMatching = false;
      }
    }
    );

    this.myForm.controls['sameAsPresent'].valueChanges.subscribe((value: boolean) => {
      if (value) {
        const presentAddress = this.myForm.controls['presentAddress'].value;
        this.myForm.controls['permanentAddress'].patchValue(presentAddress);
        this.myForm.controls['permanentAddress'].disable();

      } else {
        this.myForm.controls['permanentAddress'].reset();
        this.myForm.controls['permanentAddress'].enable();


      }
    });
    this.myForm.controls['presentAddress'].valueChanges.subscribe(data => {
      if (data !== this.myForm.controls['permanentAddress'].value) {
        this.myForm.controls['sameAsPresent'].enable();
      }
    }
    );





    this.myForm.controls['permAddress'].valueChanges.pipe(distinctUntilChanged()).subscribe(
      data => {
        if (data) {
          this.myForm.controls['same'].disable();
          this.myForm.controls['same'].clearValidators();
        }
        else {
          this.myForm.controls['same'].enable();
          this.myForm.controls['same'].setValidators(Validators.required);
        }
      }
    );

    this.myForm.controls['same'].valueChanges.pipe(distinctUntilChanged()).subscribe(
      data => {
        if (data) {
          const currentAddress = this.myForm.controls['currentAddress'].value;
          this.myForm.controls['permAddress'].disable();
          this.myForm.controls['permAddress'].patchValue(currentAddress);
        }
        else {
          this.myForm.controls['permAddress'].enable();
          this.myForm.controls['permAddress'].setValidators(Validators.required);
        }
      }
    );
    this.myForm.controls['currentAddress'].valueChanges.subscribe(
      data => {
        // const currentAddress = this.myForm.controls['permAddress'].value;
        if (data !== this.myForm.controls['permAddress'].value) {
          this.myForm.controls['same'].enable();
          this.myForm.controls['same'].reset();
        } else {
          this.myForm.controls['same'].disable();
          this.myForm.controls['same'].setValidators(Validators.required);
        }
      }
    );







    // this.myForm.controls['userName'].valueChanges.subscribe(data => {
    //   if (this.myForm.value.userName === this.restrictedUsername) {
    //     this.nameRestricted = true;
    //   } else {
    //     this.nameRestricted = false;
    //   }
    // })
  }

  // get password() {
  //   return this.myForm.get('password');
  // }

  ratingValidator(rating: AbstractControl) {
    if (rating.value > 5 || rating.value < 1) {
      return { message: "inavlid rating" }
    }
    return null;
  }


  handleForm() {
    console.log(this.myForm);

  }
  // handleAddress() {
  //   console.log(this.addressGroup);
  // }

  reset() {
    this.myForm.reset(
      {
        userName: "hari"

      }
    )
  }

  setvalue() {
    this.myForm.setValue(
      {
        email: "ravi@gmail.com",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: "male",
        rating: 0,
        address: {
          city: "",
          street: "",
          pin: "",

        },

        hobbies: []


      }
    )
  }

  patchValue() {
    this.myForm.patchValue(
      {
        userName: "hari",
        email: "hari@gmail.com"

      }
    )
  }

  get hobbyControls() {
    return (<FormArray>this.myForm.get('hobbies')).controls
  }

  passwordValidator1(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value: string = control.value;

      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasNumber = /[0-9]/.test(value);

      if (!hasSpecialChar || !hasNumber) {
        return { 'passwordRequirements': true };
      }

      return null;
    };
  }

  passwordValidator(control: FormControl) {

    const passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,}$/;

    if (!passwordPattern.test(control.value)) {
      return { invalidPassword: true };
    }
    return null;
  }




  addHobies() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.myForm.get('hobbies')).push(control)
  }
  removeHobby(index: number) {
    (this.myForm.controls['hobbies'] as FormArray).removeAt(index)
  }

  isNameRestricted(fcontrol: FormControl) {
    if (this.restrictedUsername.includes(fcontrol.value)) {
      return { nameRestricted: true }
    }
    return null as any;
  }
  usernameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;

      // Define your validation logic here
      const valid = /^[a-zA-Z0-9_]+$/.test(value); // Example: Only allows alphanumeric characters and underscores
      //const valid2 = "advaithkumar"
      return valid ? null : { invalidUsername: true };
    };
  }

  isEmailRestricted(control: FormControl): Promise<any> | Observable<any> {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({ emailRestricted: true });
        } else {
          resolve(null);
        }
      }, 2000)

    });
    return promise;


  }


  get emails() {

    return this.myForm.controls['emails'] as FormArray

  }

  addEmail() {
    (this.myForm.controls['emails'] as FormArray).push(this.fb.control(''))
  }

  removeEmail(index: number) {
    (this.myForm.controls['emails'] as FormArray).removeAt(index)

  }

  userNameValidateJson(username: FormControl) {

    return this.http.get('assets/users.json').pipe(delay(2000)).pipe(map((data: any) => {

      let x = data.filter((user: string) => user == username.value);
      console.log("json values " + x);

      if (!username.value) {
        return { userName: 'empty' }
      } else {
        if (x.length > 0) {
          return { userName: 'taken' }
        } else {
          return null;
        }
      }
    }))


  }


  handlefullAddress() {
    console.log(this.myForm.value);

  }





}
