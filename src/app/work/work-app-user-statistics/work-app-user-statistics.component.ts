import {Component, OnInit} from '@angular/core';
import {WorkAppCommon} from '../work-app-common/work-app-common';
import {MdDialog} from '@angular/material';
import {WorkAppSystemService} from '../work-app-system.service';

@Component({
  selector: 'app-work-app-user-statistics',
  templateUrl: './work-app-user-statistics.component.html',
  styleUrls: ['./work-app-user-statistics.component.css']
})
export class WorkAppUserStatisticsComponent extends WorkAppCommon  implements OnInit {
  responValue: any;
  // 时间选择器
  // 开始时间
  startDate: string;
  // 至
  betweenDate: string;
  // 结束时间
  endDate: string;

  constructor(
    private  workAppService: WorkAppSystemService,
    public dialog: MdDialog
  ) {
    super(dialog);
  }

  ngOnInit() {
    this.startDate = '2017年08月10日';
    this.betweenDate = '至';
    this.endDate = '2017年08月10日';
  }

}
