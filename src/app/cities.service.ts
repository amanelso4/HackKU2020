import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CitiesService {

  constructor(    
    private http: HttpClient
  ) { }

    NameOfCity: string;

}
