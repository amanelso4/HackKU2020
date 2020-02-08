import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class City {
  Name: string;
  State: string;
}

@Injectable({
  providedIn: 'root'
})

export class CitiesService {

  constructor(    
    private http: HttpClient
  ) { }


}
