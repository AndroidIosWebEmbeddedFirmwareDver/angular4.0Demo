import {Component, OnInit, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA, MdSnackBar} from '@angular/material';
import {WorkAppSystemService} from '../../work-app-system.service';
import {WorkAppPopupsUtil} from '../../work-app-utils/work-app-popups-util';

@Component({
  selector: 'app-work-app-worker-type-delete',
  templateUrl: './work-app-worker-type-delete.component.html',
  styleUrls: ['./work-app-worker-type-delete.component.css']
})
export class WorkAppWorkerTypeDeleteComponent extends WorkAppPopupsUtil implements OnInit {
  responValue: any;
  injectDataJsonString: string;
  inTasking: boolean;

  constructor(public dialogRef: MdDialogRef<WorkAppWorkerTypeDeleteComponent>,
              public snackBar: MdSnackBar,
              private  workAppService: WorkAppSystemService,
              @Inject(MD_DIALOG_DATA) public data: any) {
    super(snackBar);
  }

  ngOnInit() {
    this.injectDataJsonString = JSON.stringify(this.data);
    this.inTasking = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteSysWorkTypeFunction(data) {
    this.inTasking = true;
    this.responValue = null;
    this.workAppService.httpPostRequest(data, WorkAppSystemService.SERVERURL_SYS_WORK_TYPE_DELETE).then((val) => {
      console.log(val);
      this.responValue = val;
      if (this.responValue.code === WorkAppSystemService.SERVER_HTTP_TASK_STATUS_SUCCESS) {
        this.dialogRef.close(this.responValue.code);
      }else {
        this.inTasking = false;
      }
      this.openSnackBar(this.responValue.msg, 'ok', 1000);
    });
  }

}
