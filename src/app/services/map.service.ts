import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {
city!:string;
constructor(private http: HttpClient) { }

setCity(city:string){
  this.city = city;
  console.log('in service', this.city);
}

getLatLong(){
  return this.http.get(`${environment.cityApi_one}${this.city}${environment.cityApi_two}`);
}
}
