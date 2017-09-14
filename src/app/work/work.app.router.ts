import {RouterModule, Routes, RouterOutlet, provideRoutes, RouterLink} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WorkAppHomeComponent} from './work-app-home/work-app-home.component';
import {WorkAppUserStatisticsComponent} from './work-app-user-statistics/work-app-user-statistics.component';
import {WorkAppWorkerTypeComponent} from './work-app-worker-type/work-app-worker-type.component';
import {WorkAppUserExamComponent} from './work-app-user-exam/work-app-user-exam.component';
import {WorkAppAboutUsComponent} from './work-app-about-us/work-app-about-us.component';
import {WorkAppSanfangFuliComponent} from './work-app-sanfang-fuli/work-app-sanfang-fuli.component';
import {WorkAppMainComponent} from './work-app-main/work-app-main.component';


const workAppRouters: Routes = [
  {
    path: 'app/work/work-app-main',
    component: WorkAppMainComponent
  },
  {
    path: 'app/work/work-app-home',
    component: WorkAppHomeComponent
  },
  {
    path: 'app/work/work-app-user-statistics',
    component: WorkAppUserStatisticsComponent
  },
  {
    path: 'app/work/work-app-worker-type',
    component: WorkAppWorkerTypeComponent
  },
  {
    path: 'app/work/work-app-user-exam',
    component: WorkAppUserExamComponent
  },
  {
    path: 'app/work/work-app-about-us',
    component: WorkAppAboutUsComponent
  },
  {
    path: 'app/work/work-app-sanfang-fuli',
    component: WorkAppSanfangFuliComponent
  },
];


@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forChild(workAppRouters)
    ],
    exports: [
      RouterModule
    ],
  }
)
export class WorkAppRouterModule {
}
