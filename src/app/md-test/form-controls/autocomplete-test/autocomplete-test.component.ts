import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-test',
  templateUrl: './autocomplete-test.component.html',
  styleUrls: ['./autocomplete-test.component.css']
})
export class AutocompleteTestComponent implements OnInit {
  modelName: string;

  choices = [
    {
      value: 'aaa',
      name: 'aaa'
    },
    {
      value: 'bbb',
      name: 'bbb'
    },
    {
      value: 'ccc',
      name: 'ccc'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
