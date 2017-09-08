import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {AppMddialog} from './app-mddialog';
import {AppMdcomponent} from './app-mdcomponent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppMdcomponent {

  position = 'before';
  constructor(public dialog: MdDialog) {
    super(dialog);
  }
}
