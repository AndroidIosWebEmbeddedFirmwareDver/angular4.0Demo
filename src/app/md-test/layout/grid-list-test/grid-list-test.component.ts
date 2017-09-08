import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list-test',
  templateUrl: './grid-list-test.component.html',
  styleUrls: ['./grid-list-test.component.css']
})
export class GridListTestComponent implements OnInit {
  gridListCols= 4;
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
