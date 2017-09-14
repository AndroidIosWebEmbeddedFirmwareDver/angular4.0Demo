import {Component, OnInit} from '@angular/core';

import {MdDialog} from '@angular/material';
import {WorkAppSystemService} from '../work-app-system.service';
import {WorkAppCommon} from '../work-app-common/work-app-common';

@Component({
  selector: 'app-work-app-user-exam',
  templateUrl: './work-app-user-exam.component.html',
  styleUrls: ['./work-app-user-exam.component.css']
})
export class WorkAppUserExamComponent extends WorkAppCommon implements OnInit {


  constructor(private  workAppService: WorkAppSystemService,
              public dialog: MdDialog) {
    super(dialog);
  }


  ngOnInit() {
  }

}
