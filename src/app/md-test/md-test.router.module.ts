import {RouterModule, Routes, RouterOutlet, provideRoutes, RouterLink} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TableWithFilteringComponent} from './data-table/table-test/table-with-filtering/table-with-filtering.component';
import {TableWithPaginationComponent} from './data-table/table-test/table-with-pagination/table-with-pagination.component';
import {TableWithSortingComponent} from './data-table/table-test/table-with-sorting/table-with-sorting.component'; // <-- NgModel lives here


const mdTestRouters: Routes = [
  {
    path: 'md-test/table-test/table-with-filtering',
    component: TableWithFilteringComponent
  },
  {
    path: 'md-test/table-test/table-with-pagination',
    component: TableWithPaginationComponent
  },
  {
    path: 'md-test/table-test/table-with-sorting',
    component: TableWithSortingComponent
  },
];

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forChild(mdTestRouters)
    ],
    exports: [
      RouterModule
    ],
  }
)
export class MdTestRouterModule {
}
