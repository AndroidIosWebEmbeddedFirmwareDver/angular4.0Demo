import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {WorkAppCommon} from '../work-app-common/work-app-common';
import {WorkAppSystemService} from '../work-app-system.service';
import {WorkAppWorkerTypeEditComponent} from './work-app-worker-type-edit/work-app-worker-type-edit.component';
import {WorkAppWorkerTypeAddComponent} from './work-app-worker-type-add/work-app-worker-type-add.component';
import {WorkAppWorkerTypeDeleteComponent} from './work-app-worker-type-delete/work-app-worker-type-delete.component';

@Component({
  selector: 'app-work-app-worker-type',
  templateUrl: './work-app-worker-type.component.html',
  styleUrls: ['./work-app-worker-type.component.css']
})
export class WorkAppWorkerTypeComponent extends WorkAppCommon implements OnInit {
  responValue: any;
  addSysWorkType: string;
  editSysWorkType: any;

  // POPUPS
  workerTypePopups = [
    {
      code: 0,
      name: 'edit',
      showCompoent: WorkAppWorkerTypeEditComponent
    },
    {
      code: 1,
      name: 'delete',
      showCompoent: WorkAppWorkerTypeDeleteComponent
    },
    {
      code: 2,
      name: 'add',
      showCompoent: WorkAppWorkerTypeAddComponent
    },
  ];

  constructor(private  workAppService: WorkAppSystemService,
              public dialog: MdDialog) {
    super(dialog);
  }


  ngOnInit() {
    this.querySysWorkTypeData();
    this.addSysWorkType = '+';
  }

  // URL /api/sys/work/home
  querySysWorkTypeData(): void {
    this.responValue = null;
    this.workAppService.httpGetRequest(WorkAppSystemService.SERVERURL_SYS_WORK_TYPE).then((val) => {
      console.log(val);
      this.responValue = val;
    });
  }

  // URL /api/sys/work/home
  addSysWorkTypeFunction(): void {
    this.openDialogWithShowCompoent(this.workerTypePopups[2].showCompoent);
  }

  editSysWorkTypeFunction(data): void {
    console.log(data);
    this.editSysWorkType = data;
    this.openDialogWithShowCompoentAndData(this.workerTypePopups[0].showCompoent, data);
  }

  deleteSysWorkTypeFunction(data): void {
    console.log(data);
    this.editSysWorkType = data;
    this.openDialogWithShowCompoentAndData(this.workerTypePopups[1].showCompoent, data);
  }

  dialogAfterClosedSubscribe(resultData) {
    if (resultData) {
      this.querySysWorkTypeData();
    }
  }
}
