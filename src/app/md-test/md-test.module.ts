import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {CommonModule} from '@angular/common';
import {AutocompleteTestComponent} from './form-controls/autocomplete-test/autocomplete-test.component';
import {CheckboxTestComponent} from './form-controls/checkbox-test/checkbox-test.component';
import {DatepickerTestComponent} from './form-controls/datepicker-test/datepicker-test.component';
import {InputTestComponent} from './form-controls/input-test/input-test.component';
import {RadioButtonTestComponent} from './form-controls/radio-button-test/radio-button-test.component';
import {SelectTestComponent} from './form-controls/select-test/select-test.component';
import {SliderTestComponent} from './form-controls/slider-test/slider-test.component';
import {SlideToggleTestComponent} from './form-controls/slide-toggle-test/slide-toggle-test.component';
import {MenuTestComponent} from './navigation/menu-test/menu-test.component';
import {SidenavTestComponent} from './navigation/sidenav-test/sidenav-test.component';
import {ToolbarTestComponent} from './navigation/toolbar-test/toolbar-test.component';
import {ListTestComponent} from './layout/list-test/list-test.component';
import {GridListTestComponent} from './layout/grid-list-test/grid-list-test.component';
import {CardTestComponent} from './layout/card-test/card-test.component';
import {TabsTestComponent} from './layout/tabs-test/tabs-test.component';
import {ButtonTestComponent} from './buttons-indications/button-test/button-test.component';
import {ButtonToggleTestComponent} from './buttons-indications/button-toggle-test/button-toggle-test.component';
import {ChipsTestComponent} from './buttons-indications/chips-test/chips-test.component';
import {IconTestComponent} from './buttons-indications/icon-test/icon-test.component';
import {ProgressSpinnerTestComponent} from './buttons-indications/progress-spinner-test/progress-spinner-test.component';
import {ProgressBarTestComponent} from './buttons-indications/progress-bar-test/progress-bar-test.component';
import {DialogTestComponent} from './popups-models/dialog-test/dialog-test.component';
import {TooltipTestComponent} from './popups-models/tooltip-test/tooltip-test.component';
import {SnackbarTestComponent} from './popups-models/snackbar-test/snackbar-test.component';
import {TableTestComponent} from './data-table/table-test/table-test.component';
import {SortHeaderTestComponent} from './data-table/sort-header-test/sort-header-test.component';
import {PaginatorTestComponent} from './data-table/paginator-test/paginator-test.component';
import {MdDialogCommonComponent} from '../md-dialog-common/md-dialog-common.component';
import {CommonMaterialModule} from '../common/MdCommon.module';
import {SnackbarShowViewComponent} from './popups-models/snackbar-test/snackbar-show-view/snackbar-show-view.component';
import {TableWithFilteringComponent} from './data-table/table-test/table-with-filtering/table-with-filtering.component';
import {TableWithPaginationComponent} from './data-table/table-test/table-with-pagination/table-with-pagination.component';
import {TableWithSortingComponent} from './data-table/table-test/table-with-sorting/table-with-sorting.component';
import {ExpansionPanelTestComponent} from './layout/expansion-panel-test/expansion-panel-test.component';
import {MdTestRouterModule} from './md-test.router.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    CommonMaterialModule,
    MdTestRouterModule,
  ],
  declarations: [
    AutocompleteTestComponent,
    MdDialogCommonComponent,
    CheckboxTestComponent,
    DatepickerTestComponent,
    InputTestComponent,
    RadioButtonTestComponent,
    SelectTestComponent,
    SliderTestComponent,
    SlideToggleTestComponent,
    MenuTestComponent,
    SidenavTestComponent,
    ToolbarTestComponent,
    ListTestComponent,
    GridListTestComponent,
    CardTestComponent,
    TabsTestComponent,
    ExpansionPanelTestComponent,
    ButtonTestComponent,
    ButtonToggleTestComponent,
    ChipsTestComponent,
    IconTestComponent,
    ProgressSpinnerTestComponent,
    ProgressBarTestComponent,
    DialogTestComponent,
    TooltipTestComponent,
    SnackbarTestComponent,
    TableTestComponent,
    SortHeaderTestComponent,
    PaginatorTestComponent,
    SnackbarShowViewComponent,
    TableWithFilteringComponent,
    TableWithPaginationComponent,
    TableWithSortingComponent,
  ],
  exports: [
    AutocompleteTestComponent,
    MdDialogCommonComponent,
    CheckboxTestComponent,
    DatepickerTestComponent,
    InputTestComponent,
    RadioButtonTestComponent,
    SelectTestComponent,
    SliderTestComponent,
    SlideToggleTestComponent,
    MenuTestComponent,
    SidenavTestComponent,
    ToolbarTestComponent,
    ListTestComponent,
    GridListTestComponent,
    CardTestComponent,
    TabsTestComponent,
    ExpansionPanelTestComponent,
    ButtonTestComponent,
    ButtonToggleTestComponent,
    ChipsTestComponent,
    IconTestComponent,
    ProgressSpinnerTestComponent,
    ProgressBarTestComponent,
    DialogTestComponent,
    TooltipTestComponent,
    SnackbarTestComponent,
    TableTestComponent,
    SortHeaderTestComponent,
    PaginatorTestComponent,
    SnackbarShowViewComponent,
    TableWithFilteringComponent,
    TableWithPaginationComponent,
    TableWithSortingComponent,
  ],
  entryComponents: [
    AutocompleteTestComponent,
    MdDialogCommonComponent,
    AutocompleteTestComponent,
    CheckboxTestComponent,
    DatepickerTestComponent,
    InputTestComponent,
    RadioButtonTestComponent,
    SelectTestComponent,
    SliderTestComponent,
    SlideToggleTestComponent,
    MenuTestComponent,
    SidenavTestComponent,
    ToolbarTestComponent,
    ListTestComponent,
    GridListTestComponent,
    CardTestComponent,
    TabsTestComponent,
    ExpansionPanelTestComponent,
    ButtonTestComponent,
    ButtonToggleTestComponent,
    ChipsTestComponent,
    IconTestComponent,
    ProgressSpinnerTestComponent,
    ProgressBarTestComponent,
    DialogTestComponent,
    TooltipTestComponent,
    SnackbarTestComponent,
    TableTestComponent,
    SortHeaderTestComponent,
    PaginatorTestComponent,
    SnackbarShowViewComponent,
    TableWithFilteringComponent,
    TableWithPaginationComponent,
    TableWithSortingComponent,
  ]
})
export class MdTestModule {
}
