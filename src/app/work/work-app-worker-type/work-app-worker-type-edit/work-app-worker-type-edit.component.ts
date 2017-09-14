import {Component, OnInit, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA, MdSnackBar} from '@angular/material';
import {WorkAppSystemService} from '../../work-app-system.service';
import {WorkAppPopupsUtil} from '../../work-app-utils/work-app-popups-util';


@Component({
  selector: 'app-work-app-worker-type-edit',
  templateUrl: './work-app-worker-type-edit.component.html',
  styleUrls: ['./work-app-worker-type-edit.component.css']
})
export class WorkAppWorkerTypeEditComponent extends WorkAppPopupsUtil implements OnInit {
  responValue: any;
  injectDataJsonString: string;
  // 编辑缓存
  workTypeName: string;
  workTypeDescription: string;

  inTasking: boolean;

  constructor(public dialogRef: MdDialogRef<WorkAppWorkerTypeEditComponent>,
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
      if (!this.workTypeName || this.workTypeName.length <= 0) {
        this.openSnackBar('工种类型名称必填', 'ok', 1000);
        return;
      }
      if (!this.workTypeDescription || this.workTypeDescription.length <= 0) {
        this.openSnackBar('工种类型描述必填', 'ok', 1000);
        return;
      }
      this.inTasking = true;
      this.responValue = null;
      data.name = this.workTypeName;
      data.description = this.workTypeDescription;
      this.workAppService.httpPostRequest(data, WorkAppSystemService.SERVERURL_SYS_WORK_TYPE_UPDATE).then((val) => {
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
    this.injectDataJsonString = JSON.stringify(this.data);
    this.workTypeName = this.data.name;
    this.workTypeDescription = this.data.description;
  }

}
