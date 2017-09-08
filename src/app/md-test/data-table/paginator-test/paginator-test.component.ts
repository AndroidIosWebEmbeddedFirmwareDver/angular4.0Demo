import {Component, OnInit} from '@angular/core';

import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-paginator-test',
  templateUrl: './paginator-test.component.html',
  styleUrls: ['./paginator-test.component.css']
})
export class PaginatorTestComponent implements OnInit {

  // MdPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MdPaginator Output
  pageEvent: PageEvent;

  constructor() {
  }

  ngOnInit() {
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }


}
