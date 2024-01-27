import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  searchQuery: string = ''
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
    },{
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

  filteredResults = [...this.menuItem];

  constructor(public dialogRef: MatDialogRef<SearchBoxComponent>) {}

  filterByUserName() {
     
     this.filteredResults = this.menuItem.filter((item)=>{
      return !this.searchQuery? true: item.title.toLowerCase().startsWith(this.searchQuery.toLowerCase());
     })
     console.log('@@@ filtered', this.filteredResults);
  }
}
