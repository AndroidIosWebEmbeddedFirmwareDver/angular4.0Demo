import {MdSnackBar} from '@angular/material';


export class WorkAppPopupsUtil {

  public isJoinAtWorkAppMain = true;

  constructor(public snackBar: MdSnackBar) {
  }

  public openSnackBar(message: string, action: string, aDuration: number) {
    this.snackBar.open(message, action, {
      duration: aDuration,
    });
  }
}
