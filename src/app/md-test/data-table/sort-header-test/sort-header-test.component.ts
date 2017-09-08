import {Component, OnInit} from '@angular/core';

import {Sort} from '@angular/material';

@Component({
  selector: 'app-sort-header-test',
  templateUrl: './sort-header-test.component.html',
  styleUrls: ['./sort-header-test.component.css']
})
export class SortHeaderTestComponent implements OnInit {


  desserts = [
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];

  sortedData;

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  ngOnInit() {
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(+a.calories, +b.calories, isAsc);
        case 'fat':
          return compare(+a.fat, +b.fat, isAsc);
        case 'carbs':
          return compare(+a.carbs, +b.carbs, isAsc);
        case 'protein':
          return compare(+a.protein, +b.protein, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
