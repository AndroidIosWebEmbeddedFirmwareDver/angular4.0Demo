import {Component, OnInit} from '@angular/core';
import {WorkAppCommon} from '../work-app-common/work-app-common';
import {WorkAppSystemService} from '../work-app-system.service';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-work-app-sanfang-fuli',
  templateUrl: './work-app-sanfang-fuli.component.html',
  styleUrls: ['./work-app-sanfang-fuli.component.css']
})
export class WorkAppSanfangFuliComponent extends WorkAppCommon implements OnInit {

  sanfangmeinvresponValue: any;
  sanfangmeinvresponValueList: any;


  constructor(
    private  workAppService: WorkAppSystemService,
    public dialog: MdDialog
  ) {
    super(dialog);
  }
  ngOnInit() {
    this.querySanFangTianApiMeinv();
  }


  querySanFangTianApiMeinv() {
    this.sanfangmeinvresponValue = null;
    this.sanfangmeinvresponValueList = null;
    this.workAppService.httpGetRequest(WorkAppSystemService.SERVERURL_SANFANG_FULI_MEINV).then((val) => {
      console.log(val);
      this.sanfangmeinvresponValue = JSON.parse(val);
      console.log(this.sanfangmeinvresponValue);
      if (this.sanfangmeinvresponValue.code && this.sanfangmeinvresponValue.code === 200) {
        this.sanfangmeinvresponValue.codeStatus = true;
      }
      if (this.sanfangmeinvresponValue.msg && this.sanfangmeinvresponValue.msg === 'success') {
        this.sanfangmeinvresponValue.msgStatus = true;
      }
      if (this.sanfangmeinvresponValue.newslist) {
        this.sanfangmeinvresponValueList = this.sanfangmeinvresponValue.newslist;
      }
    });
  }

}
