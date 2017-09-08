import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner-test',
  templateUrl: './progress-spinner-test.component.html',
  styleUrls: ['./progress-spinner-test.component.css']
})
export class ProgressSpinnerTestComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  constructor() { }

  ngOnInit() {
  }

}
