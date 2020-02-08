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
jan: number;
feb: number;
mar: number;
ap: number;
ma: number;
ju: number;
jul: number;
aug: number;
sep: number;
oct: number;
nov: number;
dec: number;
load()
{
  
  for(let i = 0; i<6; i++)
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
      this.jan = this.cities[i].Jan;
      this.feb = this.cities[i].Feb;
      this.mar = this.cities[i].March;
      this.ap = this.cities[i].April;
      this.ma = this.cities[i].May;
      this.ju = this.cities[i].June;
      this.jul = this.cities[i].July;
      this.aug = this.cities[i].Aug;
      this.sep = this.cities[i].Sept;
      this.oct = this.cities[i].Oct;
      this.nov = this.cities[i].Nov;
      this.dec = this.cities[i].Dec;
    
    }
  }
  
}

}
