import {OnInit} from '@angular/core';
import {WorkAppSystemService} from '../work-app-system.service';

import {MdDialog} from '@angular/material';


export class WorkAppCommon implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  getLoginStatus(): number {
    return WorkAppSystemService.hadLogined;
  }

  changeLoginStatus(hadLogined) {
    WorkAppSystemService.hadLogined = hadLogined;
  }


  openDialogWithShowCompoent(showCompoent): void {
    const dialogRef = this.dialog.open(showCompoent, {
      width: 'auto',
      data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      this.dialogAfterClosedSubscribe(result);
    });
  }

  openDialogWithShowCompoentAndData(showCompoent, postData): void {
    const dialogRef = this.dialog.open(showCompoent, {
      width: 'auto',
      data: postData
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogAfterClosedSubscribe(result);
    });
  }

  dialogAfterClosedSubscribe(resultData) {
  }

}
