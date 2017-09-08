import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button-test',
  templateUrl: './radio-button-test.component.html',
  styleUrls: ['./radio-button-test.component.css']
})
export class RadioButtonTestComponent implements OnInit {
  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
  constructor() { }

  ngOnInit() {
  }

}
