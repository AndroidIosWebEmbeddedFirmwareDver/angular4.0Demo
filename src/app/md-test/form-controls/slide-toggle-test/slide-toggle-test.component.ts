import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-toggle-test',
  templateUrl: './slide-toggle-test.component.html',
  styleUrls: ['./slide-toggle-test.component.css']
})
export class SlideToggleTestComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
