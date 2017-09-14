import {NgModule} from '@angular/core';
import {WorkAppHomeComponent} from './work-app-home/work-app-home.component';
import {WorkAppUserStatisticsComponent} from './work-app-user-statistics/work-app-user-statistics.component';
import {WorkAppWorkerTypeComponent} from './work-app-worker-type/work-app-worker-type.component';
import {WorkAppUserExamComponent} from './work-app-user-exam/work-app-user-exam.component';
import {WorkAppAboutUsComponent} from './work-app-about-us/work-app-about-us.component';
import {WorkAppRouterModule} from './work.app.router';
import {WorkAppSystemService} from './work-app-system.service';
import {CommonMaterialModule} from '../common/MdCommon.module';
import { WorkAppSanfangFuliComponent } from './work-app-sanfang-fuli/work-app-sanfang-fuli.component';
import { WorkAppWorkerTypeEditComponent } from './work-app-worker-type/work-app-worker-type-edit/work-app-worker-type-edit.component';
import { WorkAppWorkerTypeAddComponent } from './work-app-worker-type/work-app-worker-type-add/work-app-worker-type-add.component';
import { WorkAppWorkerTypeDeleteComponent } from './work-app-worker-type/work-app-worker-type-delete/work-app-worker-type-delete.component';

import {FormsModule} from '@angular/forms';
import { WorkAppMainComponent } from './work-app-main/work-app-main.component'; // <-- NgModel lives here

@NgModule(
  {
    declarations: [
      WorkAppMainComponent,
      WorkAppHomeComponent,
      WorkAppUserStatisticsComponent,
      WorkAppWorkerTypeComponent,
      WorkAppUserExamComponent,
      WorkAppAboutUsComponent,
      WorkAppSanfangFuliComponent,
      WorkAppWorkerTypeEditComponent,
      WorkAppWorkerTypeAddComponent,
      WorkAppWorkerTypeDeleteComponent,
    ],
    imports: [
      FormsModule,
      WorkAppRouterModule,
      CommonMaterialModule,
    ],
    exports: [
      WorkAppHomeComponent,
      WorkAppUserStatisticsComponent,
      WorkAppWorkerTypeComponent,
      WorkAppUserExamComponent,
      WorkAppAboutUsComponent,
    ],
    entryComponents: [
      WorkAppMainComponent,
      WorkAppHomeComponent,
      WorkAppUserStatisticsComponent,
      WorkAppWorkerTypeComponent,
      WorkAppUserExamComponent,
      WorkAppAboutUsComponent,
      WorkAppWorkerTypeEditComponent,
      WorkAppWorkerTypeAddComponent,
      WorkAppWorkerTypeDeleteComponent,
    ],
    providers: [WorkAppSystemService],
  })

export class WorkAppModule {
}



