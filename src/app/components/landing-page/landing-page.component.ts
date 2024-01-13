import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(private router: Router) {}
  
  login() {
    this.router.navigate(['/login']);
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }
}
