import { Component, OnInit } from '@angular/core';
import { citylist } from '../../assets/cities';
import { CitiesService } from '../cities.service';
import { Statement } from '@angular/compiler';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  public cities: any[] = citylist;
  constructor(
    private CitiesService: CitiesService
  ) {
    this.load();
   }

  ngOnInit() {
  }

name: string;
state: string;
load()
{
  for(let i = 0; i<100; i++)
  {
    if (this.cities[i].Name == this.CitiesService.NameOfCity)
    {
      this.name = this.cities[i].Name;
      this.state = this.cities[i].State;
    }
  }
}

}
