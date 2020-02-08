import { Component, OnInit } from '@angular/core';
import { citylist } from './../../assets/cities';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  public cities: any[] = citylist;
  constructor() { }

  ngOnInit() {
  }

}
