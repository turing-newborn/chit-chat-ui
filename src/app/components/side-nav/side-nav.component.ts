import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchBoxComponent } from '../search-box/search-box.component';

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

  constructor(private dialog: MatDialog) {}

  openSearchBox() {
     this.dialog.open(SearchBoxComponent,{
       width: '57%',
       height: '70%',
       position: {
         top: '4.5%'
       }
     })
  }
}
