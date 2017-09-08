import {OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {MdDialogCommonComponent} from './md-dialog-common/md-dialog-common.component';
import {AppMdcomponent} from './app-mdcomponent';


export class AppMddialog implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MdDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MdDialogCommonComponent, {
      width: 'auto',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  openDialogWithShowCompoent(showCompoent): void {
    const dialogRef = this.dialog.open(showCompoent, {
      width: 'auto',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  dialogAfterClosedSubscribe() {
  }
}
