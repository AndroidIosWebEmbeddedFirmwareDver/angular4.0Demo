import {Component, OnInit, Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-md-dialog-common',
  templateUrl: './md-dialog-common.component.html',
  styleUrls: ['./md-dialog-common.component.css']
})
export class MdDialogCommonComponent implements OnInit {


  ngOnInit() {
  }

  constructor(public dialogRef: MdDialogRef<MdDialog>,
              @Inject(MD_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
