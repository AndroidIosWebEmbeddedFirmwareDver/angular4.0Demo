import {AppMddialog} from './app-mddialog';
import {AutocompleteTestComponent} from './md-test/form-controls/autocomplete-test/autocomplete-test.component';
import {DatepickerTestComponent} from './md-test/form-controls/datepicker-test/datepicker-test.component';
import {CheckboxTestComponent} from './md-test/form-controls/checkbox-test/checkbox-test.component';
import {InputTestComponent} from './md-test/form-controls/input-test/input-test.component';
import {SliderTestComponent} from './md-test/form-controls/slider-test/slider-test.component';
import {SelectTestComponent} from './md-test/form-controls/select-test/select-test.component';
import {RadioButtonTestComponent} from './md-test/form-controls/radio-button-test/radio-button-test.component';
import {SlideToggleTestComponent} from './md-test/form-controls/slide-toggle-test/slide-toggle-test.component';
import {ToolbarTestComponent} from './md-test/navigation/toolbar-test/toolbar-test.component';
import {SidenavTestComponent} from './md-test/navigation/sidenav-test/sidenav-test.component';
import {MenuTestComponent} from './md-test/navigation/menu-test/menu-test.component';
import {ListTestComponent} from './md-test/layout/list-test/list-test.component';
import {GridListTestComponent} from './md-test/layout/grid-list-test/grid-list-test.component';
import {CardTestComponent} from './md-test/layout/card-test/card-test.component';
import {TabsTestComponent} from './md-test/layout/tabs-test/tabs-test.component';
import {ButtonTestComponent} from './md-test/buttons-indications/button-test/button-test.component';
import {ButtonToggleTestComponent} from './md-test/buttons-indications/button-toggle-test/button-toggle-test.component';
import {ChipsTestComponent} from './md-test/buttons-indications/chips-test/chips-test.component';
import {IconTestComponent} from './md-test/buttons-indications/icon-test/icon-test.component';
import {ProgressSpinnerTestComponent} from './md-test/buttons-indications/progress-spinner-test/progress-spinner-test.component';
import {ProgressBarTestComponent} from './md-test/buttons-indications/progress-bar-test/progress-bar-test.component';
import {DialogTestComponent} from './md-test/popups-models/dialog-test/dialog-test.component';
import {TooltipTestComponent} from './md-test/popups-models/tooltip-test/tooltip-test.component';
import {SnackbarTestComponent} from './md-test/popups-models/snackbar-test/snackbar-test.component';
import {TableTestComponent} from './md-test/data-table/table-test/table-test.component';
import {SortHeaderTestComponent} from './md-test/data-table/sort-header-test/sort-header-test.component';
import {PaginatorTestComponent} from './md-test/data-table/paginator-test/paginator-test.component';
import {ExpansionPanelTestComponent} from './md-test/layout/expansion-panel-test/expansion-panel-test.component';


export class AppMdcomponent extends AppMddialog {

  public static a = 'src/app/md-test/Autocomplete.html';

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  states = [
    {
      code: 'before',
      name: 'Before'
    },
    {
      code: 'after',
      name: 'After'
    },
    {
      code: 'above',
      name: 'Above'
    },
    {
      code: 'below',
      name: 'Below'
    },
    {
      code: 'left',
      name: 'Left'
    },
    {
      code: 'right',
      name: 'Right'
    }
  ];

  mdCompontsData = [
    //  FORM CONTROLS
    {
      name: 'FORM CONTROLS',
      data: [
        {
          code: 1,
          name: 'Autocomplete',
          showCompoent: AutocompleteTestComponent
        },
        {
          code: 2,
          name: 'Checkbox',
          showCompoent: CheckboxTestComponent
        },
        {
          code: 3,
          name: 'Datepicker',
          showCompoent: DatepickerTestComponent
        },
        {
          code: 4,
          name: 'Input',
          showCompoent: InputTestComponent
        },
        {
          code: 5,
          name: 'Radio button',
          showCompoent: RadioButtonTestComponent
        },
        {
          code: 6,
          name: 'Select',
          showCompoent: SelectTestComponent
        },
        {
          code: 7,
          name: 'Slider',
          showCompoent: SliderTestComponent
        },
        {
          code: 8,
          name: 'Slide toggle',
          showCompoent: SlideToggleTestComponent
        },
      ]
    },
    //  NAVIGATION
    {
      name: 'NAVIGATION',
      data: [
        {
          code: 1,
          name: 'Menu',
          showCompoent: MenuTestComponent
        },
        {
          code: 2,
          name: 'Sidenav',
          showCompoent: SidenavTestComponent
        },
        {
          code: 3,
          name: 'Toolbar',
          showCompoent: ToolbarTestComponent
        }
      ]
    },
    //  LAYOUT
    {
      name: 'LAYOUT',
      data: [
        {
          code: 1,
          name: 'List',
          showCompoent: ListTestComponent
        },
        {
          code: 2,
          name: 'Grid list',
          showCompoent: GridListTestComponent
        },
        {
          code: 3,
          name: 'Card',
          showCompoent: CardTestComponent
        },
        {
          code: 4,
          name: 'Tabs',
          showCompoent: TabsTestComponent
        },
        {
          code: 5,
          name: 'Expansion Panel',
          showCompoent: ExpansionPanelTestComponent
        }
      ]
    },
    //  BUTTONS & INDICATORS
    {
      name: 'BUTTONS & INDICATORS',
      data: [
        {
          code: 1,
          name: 'Button',
          showCompoent: ButtonTestComponent
        },
        {
          code: 2,
          name: 'Button toggle',
          showCompoent: ButtonToggleTestComponent
        },
        {
          code: 3,
          name: 'Chips',
          showCompoent: ChipsTestComponent
        },
        {
          code: 4,
          name: 'Icon',
          showCompoent: IconTestComponent
        },
        {
          code: 5,
          name: 'Progress spinner',
          showCompoent: ProgressSpinnerTestComponent
        },
        {
          code: 6,
          name: 'Progress bar',
          showCompoent: ProgressBarTestComponent
        }
      ]
    },
    //  POPUPS & MODELS
    {
      name: 'POPUPS & MODELS',
      data: [
        {
          code: 1,
          name: 'Dialog',
          showCompoent: DialogTestComponent
        },
        {
          code: 2,
          name: 'Tooltip',
          showCompoent: TooltipTestComponent
        },
        {
          code: 3,
          name: 'Snackbar',
          showCompoent: SnackbarTestComponent
        }
      ]
    },
    //  DATA TABLE
    {
      name: 'DATA TABLE',
      data: [
        {
          code: 1,
          name: 'Table',
          showCompoent: TableTestComponent
        },
        {
          code: 2,
          name: 'Sort header',
          showCompoent: SortHeaderTestComponent
        },
        {
          code: 3,
          name: 'Paginator',
          showCompoent: PaginatorTestComponent
        }
      ]
    }
  ];


  onMdCompontsDataItemItemClick(data) {
    console.log(data);
    if (data && data.showCompoent) {
      this.openDialogWithShowCompoent(data.showCompoent);
    }
  }


}
