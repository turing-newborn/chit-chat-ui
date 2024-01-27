import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  imgSrc = '../../../assets/images/chat-svg-image.svg';
  constructor(private router: Router) {}
  loggedOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
