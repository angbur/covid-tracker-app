import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.scss']
})
export class TopCountriesComponent implements OnInit, OnChanges {
  @Input() covidData: any;
  countriesData: any = {};

  constructor() { }
  ngOnChanges(): void {
    this.countriesData = this.covidData.Countries?.sort((a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed).slice(0,5);
  }

  ngOnInit(): void {
  }

}
