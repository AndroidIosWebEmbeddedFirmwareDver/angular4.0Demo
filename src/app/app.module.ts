import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {HttpModule, Headers, Http} from '@angular/http';
import {RouterModule, Routes, RouterOutlet, provideRoutes} from '@angular/router';

import {AppComponent} from './app.component';
import {CommonMaterialModule} from './common/MdCommon.module';
import {MdTestModule} from './md-test/md-test.module';
import {AppRouterModule} from './app.router-module';
import {WorkAppModule} from './work/work.app.module';
import {PageNotFoundComponent} from './common/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    WorkAppModule,
    CommonMaterialModule,
    MdTestModule,
    AppRouterModule,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
