import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signupForm: FormGroup;
  passwordVisible: boolean = false;
  repasswordVisible: boolean = false;
  typePassword: string = 'password';
  retypePassword: string = 'password';
  strongPasswordRegx: RegExp =
    /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)(?=.*?[#?!@$%^&*-]).{8,}$/;

  constructor(private _fb: FormBuilder) {
    this.signupForm = this._fb.group(
      {
        userName: ['', [Validators.required, Validators.minLength(5)]],
        emailId: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.required, Validators.pattern(this.strongPasswordRegx)],
        ],
        rePassword: [
          '',
          [Validators.required, Validators.pattern(this.strongPasswordRegx)],
        ],
      },
      { validator: this.checkconfirmedPassword }
    );
  }

  checkPasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.typePassword = this.passwordVisible ? 'text' : 'password';
  }

  recheckPasswordVisibility() {
    this.repasswordVisible = !this.repasswordVisible;
    this.retypePassword = this.repasswordVisible ? 'text' : 'password';
  }

  get formSignupControls(): any {
    return this.signupForm['controls'];
  }

  checkconfirmedPassword(formGroup: FormGroup) {
    console.log(formGroup);
    const password = formGroup.controls['password'].value;
    const confirmPassword = formGroup.controls['rePassword'].value;
    console.log(password, confirmPassword);
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}
