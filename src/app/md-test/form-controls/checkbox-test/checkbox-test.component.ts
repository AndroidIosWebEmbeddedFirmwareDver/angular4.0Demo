import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-test',
  templateUrl: './checkbox-test.component.html',
  styleUrls: ['./checkbox-test.component.css']
})
export class CheckboxTestComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
