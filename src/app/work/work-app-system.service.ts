import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WorkAppSystemService {
  // 处理状态
  public static SERVER_HTTP_TASK_STATUS_SUCCESS = 1001;
  public static SERVER_HTTP_TASK_STATUS_ERROR = 1002;

  public static SERVERURL = 'http://127.0.0.1:8080'; // 服务端URL
  public static SERVERURL_SYS_WORK_HOME = WorkAppSystemService.SERVERURL + '/api/sys/work/home';
  public static SERVERURL_SYS_WORK_HOME_LOGIN = WorkAppSystemService.SERVERURL + '/api/sys/work/home/login';
  public static SERVERURL_SYS_WORK_TYPE = WorkAppSystemService.SERVERURL + '/api/sys/work/woker/type';
  public static SERVERURL_SYS_WORK_TYPE_DELETE = WorkAppSystemService.SERVERURL + '/api/sys/work/woker/type/delete';
  public static SERVERURL_SYS_WORK_TYPE_UPDATE = WorkAppSystemService.SERVERURL + '/api/sys/work/woker/type/update';
  public static SERVERURL_SYS_WORK_TYPE_CREATE = WorkAppSystemService.SERVERURL + '/api/sys/work/woker/type/create';
  public static SERVERURL_SANFANG_FULI_MEINV = WorkAppSystemService.SERVERURL + '/sanfang/tianapi/meinv';

  public static hadLogined = 1; // 0-未登录、1-已经登录

  // The Headers class can't be injected. You need to instantiate it by your own:
  defaultHeaders: Headers;

  constructor
  (private  http: Http) {
  }

  // 判断是手机还是PC
  browserRedirectIsPC(): boolean {
    const sUserAgent = navigator.userAgent.toLowerCase();
    console.log(sUserAgent);
    const bIsIpad = sUserAgent.match('ipad');
    const bIsIphoneOs = sUserAgent.match('iphone os');
    const bIsMidp = sUserAgent.match('midp');
    const bIsUc7 = sUserAgent.match('rv:1.2.3.4');
    const bIsUc = sUserAgent.match('ucweb');
    const bIsAndroid = sUserAgent.match('android');
    const bIsCE = sUserAgent.match('windows ce');
    const bIsWM = sUserAgent.match('windows mobile');
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      // document.writeln('phone');
      return false;
    } else {
      // document.writeln('pc');
      return true;
    }

  }

  getdefaultHeaders(): any {
    this.defaultHeaders = new Headers();
    this.defaultHeaders.append('Content-Type', 'application/json');
    this.defaultHeaders.append('Access-Control-Allow-Origin', '*'); // 设置响应头，表示任意匹配
    return this.defaultHeaders;
  }

  /**
   * POST 网络请求
   * @param params post请求参数
   * @param {string} url posturl地址
   * @returns {any} 返回数据
   */
  public httpGetRequest(url: string): any {
    return this.http
      .get(url, {headers: this.getdefaultHeaders()})
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }


  /**
   * POST 网络请求
   * @param params post请求参数
   * @param {string} url posturl地址
   * @returns {any} 返回数据
   */
  public httpGetRequestSlowly(url: string): any {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.httpGetRequest(url)), 1000);
    });
  }


  /**
   * POST 网络请求
   * @param params post请求参数
   * @param {string} url posturl地址
   * @returns {any} 返回数据
   */
  public httpPostRequest(params: JSON, url: string): any {
    return this.http
      .post(url, params, {headers: this.getdefaultHeaders()})
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
