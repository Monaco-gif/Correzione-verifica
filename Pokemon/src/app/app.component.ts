// tutto preso dal relab 3.....punto c
import { HttpClient } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps'
import { Observable } from 'rxjs';
import { pokemon } from './model/pokemon.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'server mappe';
  
  center: google.maps.LatLngLiteral = { lat: 35.68051015980639, lng: 139.69876694123647 }; // punto c cambiare le coordinate
  zoom = 8;
  obsCiVett: Observable<pokemon[]>; 
  markerList: google.maps.MarkerOptions[];

  constructor(public http: HttpClient) {
    
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit() {
    
  }

  prepareCiVettData = (data: pokemon[]) => {
    console.log(data); 
    this.markerList = []; 
    for (const iterator of data) { 
      let m: google.maps.MarkerOptions =
      {
        position: new google.maps.LatLng(iterator.lat, iterator.lng), 
        icon:this.img()
      }
      
      this.markerList.push(m);
    }
  }

  trova_tane(){
    this.obsCiVett = this.http.get<pokemon[]>("http://127.0.0.1:5000/all"); // sostituire L' URL con quello del main.py
    this.obsCiVett.subscribe(this.prepareCiVettData);
  }
    // l immagine punto c
  img():google.maps.Icon{
    return {
      url:"./assets/hole.png", 
      scaledSize: new google.maps.Size(32,32)
    }
  }
}
