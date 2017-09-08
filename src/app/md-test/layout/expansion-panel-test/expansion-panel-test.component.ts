import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel-test',
  templateUrl: './expansion-panel-test.component.html',
  styleUrls: ['./expansion-panel-test.component.css']
})
export class ExpansionPanelTestComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit() {
  }

}
