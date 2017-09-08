import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips-test',
  templateUrl: './chips-test.component.html',
  styleUrls: ['./chips-test.component.css']
})
export class ChipsTestComponent implements OnInit {
  color: string;

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
