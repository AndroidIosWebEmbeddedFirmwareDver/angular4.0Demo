import {RouterModule, Routes, RouterOutlet, provideRoutes, RouterLink} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './common/page-not-found/page-not-found.component';


const appRouters: Routes = [
  {
    path: '',
    redirectTo: '/app/work/work-app-home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(
        appRouters,
        // {enableTracing: true} // <-- debugging purposes only),
      ),
    ],
    exports: [
      RouterModule
    ],
  }
)
export class AppRouterModule {
}
