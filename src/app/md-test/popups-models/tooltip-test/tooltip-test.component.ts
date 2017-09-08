import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tooltip-test',
  templateUrl: './tooltip-test.component.html',
  styleUrls: ['./tooltip-test.component.css']
})
export class TooltipTestComponent implements OnInit {
  position = 'before';
  positions = [
    {
      value: 'before',
      name: 'Before'
    },

    {
      value: 'after',
      name: 'After'
    },

    {
      value: 'above',
      name: 'Above'
    },

    {
      value: 'left',
      name: 'Left'
    },

    {
      value: 'right',
      name: 'Right'
    }

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
