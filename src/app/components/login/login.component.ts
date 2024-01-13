import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordVisible: boolean = false;
  typePassword: string = 'password';

  constructor(private _fb: FormBuilder) {
    this.loginForm = this._fb.group({
      userEmail: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  checkPasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.typePassword = this.passwordVisible ? 'text' : 'password';
  }

  get formLoginControls(): any {
    return this.loginForm['controls'];
  }

  resetForm() {
    this.loginForm.reset();
  }

  get hasValues() {
    const value = this.loginForm.value;
    const fields = ['userEmail', 'password'];
    return fields.reduce((acc, key) => {
      return acc || value[key];
    }, false);
  }
}
