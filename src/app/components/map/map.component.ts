import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  cityName!:string;
  cityInfo:any = [];
    latitude!: number;
    longitude!: number;
    latLong: any;
    constructor(private mapService: MapService) { }
  
    ngOnInit(): void {
    this.getLatLong();
    }
  
    display:any;
    // center:google.maps.LatLngLiteral = {lat: 19.9975, lng:73.7898};
    center:google.maps.LatLngLiteral = {lat: 19.9975, lng:73.7898};
    zoom = 10;
  
    
  
    // getCity(city:string){
    //   console.log(city);
    //   this.cityName = city;
    //   this.getLatLong();
    // }
  
    locationOnMap(city: string){
      this.cityName = city;
      this.getLatLong();
    }
  
    getLatLong(){
      this.mapService.getLatLong().subscribe((res) => {
        console.log(res);
        this.cityInfo.push(res);
        console.log(this.cityInfo[0].coord.lat);
        this.latitude = this.cityInfo[0].coord.lat;
        this.longitude = this.cityInfo[0].coord.lon;
  
        this.center = {lat:this.latitude, lng:this.longitude}
      });
  
      // this.moveMap();
    }
  
    moveMap(event: google.maps.MapMouseEvent){
      if(event.latLng!=null)
      this.center = (event.latLng.toJSON());
    }
  
    move(event: google.maps.MapMouseEvent){
      if(event.latLng!=null)
      this.display = event.latLng?.toJSON();
    }
  
  
    // **
    // center:google.maps.LatLngLiteral = {lat: 24, lng:12};
    // zoom = 4;
    // markerOptions:google.maps.MarkerOptions = {draggable: false};
    // markerPositions:google.maps.LatLngLiteral[]=[];
  
    // addMarker(event: google.maps.MapMouseEvent){
    //   if(event.latLng!=null)
    //   this.markerPositions.push(event.latLng.toJSON());
    // }
  
}
