import {Component, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {SnackbarShowViewComponent} from './snackbar-show-view/snackbar-show-view.component';

@Component({
  selector: 'app-snackbar-test',
  templateUrl: './snackbar-test.component.html',
  styleUrls: ['./snackbar-test.component.css']
})
export class SnackbarTestComponent implements OnInit {
  constructor(public snackBar: MdSnackBar) {
  }

  openSnackBar() {
    /*
    // Simple message.
    let snackBarRef = snackBar.open('Message archived');

    // Simple message with an action.
    let snackBarRef = snackBar.open('Message archived', 'Undo');

    // Load the given component into the snack-bar.
    let snackBarRef = snackbar.openFromComponent(MessageArchivedComponent);
     */
    const snackBarRef = this.snackBar.openFromComponent(SnackbarShowViewComponent, {
      duration: 3000,
    });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
    });


    snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });
  }

  ngOnInit() {
  }

}
