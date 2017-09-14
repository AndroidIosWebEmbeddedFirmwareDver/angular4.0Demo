import {Component, OnInit} from '@angular/core';
import {WorkAppCommon} from '../work-app-common/work-app-common';
import {WorkAppSystemService} from '../work-app-system.service';

import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-work-app-home',
  templateUrl: './work-app-home.component.html',
  styleUrls: ['./work-app-home.component.css']
})
export class WorkAppHomeComponent extends WorkAppCommon implements OnInit {
  responValue: any;
  employ_danwei =
    [
      '千万',
      '百万',
      ',',
      '十万',
      '万',
      '千',
      ',',
      '百',
      '十',
      '个',
    ];
  employer_regist: any;
  employer_using: any;
  employee_regist: any;
  employee_using: any;

  constructor(
    private  workAppService: WorkAppSystemService,
    public dialog: MdDialog
    ) {
    super(dialog);
  }

  ngOnInit() {
    this.querySysWorkHomeData();
  }

  // URL /api/sys/work/home
  querySysWorkHomeData(): void {
    this.responValue = null;
    this.employer_regist = null;
    this.employer_using = null;
    this.employee_regist = null;
    this.employee_using = null;
    this.workAppService.httpGetRequest(WorkAppSystemService.SERVERURL_SYS_WORK_HOME).then((val) => {
      console.log(val);
      this.responValue = val;
      // this.responValue = JSON.parse(val);
      if (this.responValue) {
        if (this.responValue.emploeeReist) {
          this.employer_regist = this.responValue.emploeeReist.split('');
        }
        if (this.responValue.emploeeUsing) {
          this.employer_using = this.responValue.emploeeUsing.split('');
        }
        if (this.responValue.emploerReist) {
          this.employee_regist = this.responValue.emploerReist.split('');
        }
        if (this.responValue.emploerUsing) {
          this.employee_using = this.responValue.emploerUsing.split('');
        }
      }
    });
  }


}
