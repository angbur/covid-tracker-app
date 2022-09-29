import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.scss']
})
export class SummaryCardsComponent implements OnInit, OnChanges {

  @Input() covidData: any;
  summaryData: any = {};

  constructor() { }
  ngOnChanges(): void {
    this.summaryData = this.covidData.Global;
  }

  ngOnInit(): void {
  }

}
