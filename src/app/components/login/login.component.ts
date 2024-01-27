import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordVisible: boolean = false;
  typePassword: string = 'password';

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
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

  login() {
    const user: User = {
      userName: this.loginForm.value.userEmail,
      email: this.loginForm.value.userEmail,
      password: this.loginForm.value.password,
    };
    this.authService.login(user).subscribe((response) => {
      console.log('Logged In Successfull');
      localStorage.clear();
      localStorage.setItem(
        'token',
        btoa(
          this.loginForm.value.userEmail + ':' + this.loginForm.value.password
        )
      );
      this.router.navigate(['/chit-chat']);
    });
  }

  onSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
