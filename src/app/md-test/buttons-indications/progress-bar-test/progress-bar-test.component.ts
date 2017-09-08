import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar-test',
  templateUrl: './progress-bar-test.component.html',
  styleUrls: ['./progress-bar-test.component.css']
})
export class ProgressBarTestComponent implements OnInit {
  color = 'primary';
  // Input must be one of these values: determinate, indeterminate, buffer, query, defaults to 'determinate'. Mirrored to mode attribute.
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor() {
  }

  ngOnInit() {
  }

}
