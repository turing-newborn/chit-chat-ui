import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  sidenavWidth = 15;

  menuItem = [
    {
      id: '1',
      title: 'About',
    },
    {
      id: '2',
      title: 'Service',
    },
    {
      id: '3',
      title: 'Home',
    },
    {
      id: '4',
      title: 'Contact',
    },
  ];
}
