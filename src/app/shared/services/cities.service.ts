import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city-model';
import { db } from '../database';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private url = 'http://localhost:3000/cities';

  // public getCities(): Observable<City[]> {
  //   return this.http.get<City[]>(this.url);
  // }
  public getCities():City[] {
    return db.cities;
  }

  constructor(private http: HttpClient) {}
}
