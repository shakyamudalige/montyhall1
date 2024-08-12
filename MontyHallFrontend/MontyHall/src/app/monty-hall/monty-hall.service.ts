import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MontyHallService {
  private apiUrl = 'http://localhost:5108/api/';
  
  constructor(private http: HttpClient) { }
  simulate(simulations: number, switchDoor: boolean): Observable<any> {
    return this.http.get(`${this.apiUrl}MontyHall/?simulations=${simulations}&switchDoor=${switchDoor}`);
  }
}
