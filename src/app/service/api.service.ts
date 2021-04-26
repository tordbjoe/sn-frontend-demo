import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Earthquake} from '../model/earthquake';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly EARTHQUAKE_API = 'http://localhost:8080/statnett/backend/api/earthquakes';

  constructor(private http: HttpClient) {
  }

  getEarthquakes(): Observable<Earthquake[]> {
    return this.http.get<Earthquake[]>(this.EARTHQUAKE_API);
  }
}
