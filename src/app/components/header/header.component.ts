import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  imgSrc = '../../../assets/images/chat-svg-image.svg';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'chatImage',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        './../../../assets/images/chat-svg-image.svg'
      )
    );
  }
}
