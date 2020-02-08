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

  getSingleCity(Name: string): Observable<City> {
    return this.http.get<Form>(`${this.formUrl}/${formNumber}`)
      .pipe(catchError(this.handleError));
  }

}
