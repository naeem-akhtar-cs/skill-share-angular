import { Component, OnInit } from '@angular/core';
declare const L: any;

@Component({
  selector: 'MyLocationComponent',
  templateUrl: './app.MyLocationComponent.html',
  styleUrls: ['./app.MyLocationComponent.css'],
})
export class MyLocationComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latlong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('mapid').setView(
        [coords.latitude, coords.longitude],
        13
      );
      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJlZWJoYXNoaXI3ODYiLCJhIjoiY2txNTJoeTBxMG1ybjJvcGZxZDJxbXBodiJ9.8ty3aFVMqDXeGEheF8hnsQ',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mymap);
      let marker = L.marker(latlong).addTo(mymap);
      marker.bindPopup('<b>Hi</b>').openPopup();

      let popup = L.popup()
        .setLatLng(latlong)
        .setContent('My Location')
        .openOn(mymap);
    });
    this.watchPosition();
  }
  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
}
