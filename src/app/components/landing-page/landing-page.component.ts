import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  login() {
    console.log('Navigate to Login component');
  }

  signUp() {
    console.log('Navigate to SignUp component');
  }
}
