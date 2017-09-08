import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {HttpModule} from '@angular/http';
import {RouterModule, Routes, RouterOutlet, provideRoutes} from '@angular/router';

import {AppComponent} from './app.component';
import {CommonMaterialModule} from './common/MdCommon.module';
import {MdTestModule} from './md-test/md-test.module';
import {AppRouterModule} from './app.router.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouterModule,
    CommonMaterialModule,
    MdTestModule
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
