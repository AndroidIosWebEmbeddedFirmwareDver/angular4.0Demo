import {Component, OnInit} from '@angular/core';
import {MdDialog, MdSnackBar} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {AppMddialog} from './app-mddialog';
import {AppMdcomponent} from './md-test/app-mdcomponent';
import {WorkAppHomeComponent} from './work/work-app-home/work-app-home.component';
import {WorkAppUserStatisticsComponent} from './work/work-app-user-statistics/work-app-user-statistics.component';
import {WorkAppWorkerTypeComponent} from './work/work-app-worker-type/work-app-worker-type.component';
import {WorkAppUserExamComponent} from './work/work-app-user-exam/work-app-user-exam.component';
import {WorkAppAboutUsComponent} from './work/work-app-about-us/work-app-about-us.component';
import {WorkAppSanfangFuliComponent} from './work/work-app-sanfang-fuli/work-app-sanfang-fuli.component';
import {WorkAppSystemService} from './work/work-app-system.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {WorkAppPopupsUtil} from './work/work-app-utils/work-app-popups-util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends WorkAppPopupsUtil implements OnInit {

  isBrowseredByPc: boolean;
  responValue: any;
  account: string;
  password: string;

  hadLogined: number;

  showLeft = true;
  contentClass = 'work-app-main-right-with-left';
  foucsFunctionItem: any;

  appWorksFunctions = [
    {
      code: 1001,
      name: '后台首页',
      iconName: 'home',
      active: true,
      link: '/app/work/work-app-home',
      showCompoent: WorkAppHomeComponent
    },
    {
      code: 1002,
      name: '用户统计',
      iconName: 'line_style',
      active: false,
      link: '/app/work/work-app-user-statistics',
      showCompoent: WorkAppUserStatisticsComponent
    },
    {
      code: 1003,
      name: '工种管理',
      iconName: 'work',
      active: false,
      link: '/app/work/work-app-worker-type',
      showCompoent: WorkAppWorkerTypeComponent
    },
    {
      code: 1004,
      name: '资料审核',
      iconName: 'find_in_page',
      active: false,
      link: '/app/work/work-app-user-exam',
      showCompoent: WorkAppUserExamComponent
    },
    {
      code: 1005,
      name: '关于我们',
      iconName: 'cast_connected',
      active: false,
      link: '/app/work/work-app-about-us',
      showCompoent: WorkAppAboutUsComponent
    },
    {
      code: 1006,
      name: '三方福利',
      active: false,
      iconName: 'devices_other',
      link: '/app/work/work-app-sanfang-fuli',
      showCompoent: WorkAppSanfangFuliComponent
    },
  ];

  accountFunctions = [
    {
      code: 1001,
      name: '切换账号',
      iconName: 'cached',
    },
    {
      code: 1002,
      name: '退出系统',
      iconName: 'exit_to_app',
    },
  ];

  constructor(public snackBar: MdSnackBar,
              public dialog: MdDialog,
              private  workAppService: WorkAppSystemService,
              private route: ActivatedRoute,
              private router: Router,
              iconRegistry: MdIconRegistry,
              sanitizer: DomSanitizer) {
    super(snackBar);
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/ic_account_circle_black_48px.svg'));
  }


  ngOnInit() {
    this.hadLogined = WorkAppSystemService.hadLogined;
    this.isBrowseredByPc = this.workAppService.browserRedirectIsPC();
    this.foucsFunctionItem = this.appWorksFunctions[0];
  }

  // URL /api/sys/work/home
  sendSysWorkTLoginData(): void {
    this.responValue = null;
    const params = new Object();
    params['name'] = this.account;
    params['password'] = this.password;
    this.workAppService.httpPostRequest(JSON.parse(JSON.stringify(params)),
      WorkAppSystemService.SERVERURL_SYS_WORK_HOME_LOGIN).then((val) => {
      console.log(val);
      this.responValue = val;
      if (this.responValue.code === WorkAppSystemService.SERVER_HTTP_TASK_STATUS_SUCCESS) {
        this.hadLogined = WorkAppSystemService.hadLogined = 1;
        this.changeFoucsFunctionItem(this.appWorksFunctions[0]);
      }
      this.openSnackBar(this.responValue.msg, 'ok', 3000);
    });
  }

//  关闭退出
  CloseWebPage(): void {
    if (navigator.userAgent.indexOf('MSIE') > 0) {
      if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
        window.opener = null;
        window.close();
      } else {
        window.open('', '_top');
        window.top.close();
      }
    } else if (navigator.userAgent.indexOf('Firefox') > 0) {
      window.location.href = 'about:blank ';
    } else {
      // window.opener = null;
      // window.open('', '_self', '');
      // window.close();
      window.location.href = 'about:blank';
      window.close();
    }
  }

  onMenuClick() {
    this.showLeft = !this.showLeft;
    if (this.showLeft) {
      this.contentClass = 'work-app-main-right-with-left';
    } else {
      this.contentClass = 'work-app-main-right-without-left';
    }
  }

  changeFoucsFunctionItem(data) {
    this.foucsFunctionItem = data;
    // Navigate with relative link
    // 导航到指定组件Component
    this.router.navigateByUrl(data.link, {relativeTo: this.route});
    // this.router.navigate([crisis.id], { relativeTo: this.route });
  }


  onRightAccountMenuClick(data) {
    if (data) {
      if (data.code === this.accountFunctions[0].code) {
        this.hadLogined = WorkAppSystemService.hadLogined = 0;
      } else if (data.code === this.accountFunctions[1].code) {
        this.CloseWebPage();
      }
    }
  }

}
