import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-icon-test',
  templateUrl: './icon-test.component.html',
  styleUrls: ['./icon-test.component.css']
})
export class IconTestComponent implements OnInit {

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/ic_thumb_up_black_24px.svg'));
  }

  ngOnInit() {
  }

}
