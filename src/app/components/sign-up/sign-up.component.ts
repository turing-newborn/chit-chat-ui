import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor(private _fb: FormBuilder, private route: Router) {
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
    const password = formGroup.controls['password'].value;
    const confirmPassword = formGroup.controls['rePassword'].value;
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  resetForm() {
    this.signupForm.reset();
  }

  get hasValues() {
    const value = this.signupForm.value;
    const fields = ['userName', 'emailId', 'password', 'rePassword'];
    return fields.reduce((acc, key) => {
      return acc || value[key];
    }, false);
  }

  onLogin() {
    this.route.navigate(['/login']);
  }
}
