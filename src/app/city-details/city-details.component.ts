import { Component, OnInit } from '@angular/core';
import { citylist, City } from '../../assets/cities';
import { CitiesService } from '../cities.service';
import { Statement } from '@angular/compiler';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  public cities: City[] = citylist;
  constructor(
    private CitiesService: CitiesService
  ) {
    this.load();
   }

  ngOnInit() {
  }
name: string;
state: string;
cost: number;
pop: number;
image: string;
link: string;
att: string;
load()
{
  
  for(let i = 0; i<3; i++)
  {
    if (this.cities[i].Name == this.CitiesService.NameOfCity)
    {
      this.name = this.cities[i].Name;
      this.state = this.cities[i].State;
      this.cost = this.cities[i].COL;
      this.pop = this.cities[i].Population;
      this.image = this.cities[i].ImageLink;
      this.link = this.cities[i].Link;
      this.att = this.cities[i].Attraction;
    
    }
  }
  
}

}
