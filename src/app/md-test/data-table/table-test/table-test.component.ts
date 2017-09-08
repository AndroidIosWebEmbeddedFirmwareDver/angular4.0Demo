import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {Routes, RouterOutlet} from '@angular/router';
import {TableWithFilteringComponent} from './table-with-filtering/table-with-filtering.component';
import {TableWithPaginationComponent} from './table-with-pagination/table-with-pagination.component';
import {TableWithSortingComponent} from './table-with-sorting/table-with-sorting.component';


@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit {
  tables = [
    {
      code: 1,
      name: 'Table With Filtering',
      link: '/md-test/table-test/table-with-filtering',
      showCompoent: TableWithFilteringComponent
    },
    {
      code: 2,
      name: 'Table With Pagination',
      link: '/md-test/table-test/table-with-pagination',
      showCompoent: TableWithPaginationComponent
    },
    {
      code: 3,
      name: 'Table With Sorting',
      link: '/md-test/table-test/table-with-sorting',
      showCompoent: TableWithSortingComponent
    }
  ];


  constructor() {
  }

  ngOnInit() {

  }

  onItemClick(data) {
    console.log(data);
  }
}
