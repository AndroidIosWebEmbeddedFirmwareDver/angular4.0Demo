import {Component, OnInit, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA, MdSnackBar} from '@angular/material';
import {WorkAppSystemService} from '../../work-app-system.service';
import {WorkAppPopupsUtil} from '../../work-app-utils/work-app-popups-util';


@Component({
  selector: 'app-work-app-worker-type-add',
  templateUrl: './work-app-worker-type-add.component.html',
  styleUrls: ['./work-app-worker-type-add.component.css']
})
export class WorkAppWorkerTypeAddComponent extends WorkAppPopupsUtil implements OnInit {
  responValue: any;
  inTasking: boolean;

  constructor(public dialogRef: MdDialogRef<WorkAppWorkerTypeAddComponent>,
              public snackBar: MdSnackBar,
              private  workAppService: WorkAppSystemService,
              @Inject(MD_DIALOG_DATA) public data: any) {
    super(snackBar);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editSysWorkTypeFunction(data) {
    if (data) {
      if (!data.name || data.name.length <= 0) {
        this.openSnackBar('工种类型名称必填', 'ok', 1000);
        return;
      }
      if (!data.description || data.description.length <= 0) {
        this.openSnackBar('工种类型描述必填', 'ok', 1000);
        return;
      }
      this.inTasking = true;
      this.responValue = null;
      this.workAppService.httpPostRequest(data, WorkAppSystemService.SERVERURL_SYS_WORK_TYPE_CREATE).then((val) => {
        console.log(val);
        this.responValue = val;
        if (this.responValue.code === WorkAppSystemService.SERVER_HTTP_TASK_STATUS_SUCCESS) {
          this.dialogRef.close(this.responValue.code);
        } else {
          this.inTasking = false;
        }
        this.openSnackBar(this.responValue.msg, 'ok', 1000);
      });
    }
  }

  ngOnInit() {
    this.data['name'] = '';
    this.data['description'] = '';
    this.data['createdDate'] = new Date();
    this.data['modifiedDate'] = new Date();
  }

}
