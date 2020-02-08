import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private CitiesService: CitiesService
  ) { }

  ngOnInit() {
  }
sendName(name: string) {
  this.CitiesService.NameOfCity = name;
}
}
