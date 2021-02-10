import { Component, OnInit} from '@angular/core';
// import { GoogleMap } from '@angular/google-maps';
// import { } from 'googlemaps';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  // @ViewChild('mapContainer', {static: false}) mapElement: ElementRef;
  // map: google.maps.Map;
  // latitude: any = 38.6270;
  // longitude: any = 90.1994;


  constructor() { }

  ngOnInit(): void {   
      
    
//     const mapProperties = {
//       center: new google.maps.LatLng(35.2271, -80.8431),
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//  };

//   this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
 

// function initMap(): void {
//   this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: 38.6270, lng: 90.1994 },
//     zoom: 8,
//   });
// }

// const loader = new Loader({
//   apiKey: "AIzaSyA0pxexpZMsRgcANroL1KkHb61Sa3uvRNk",
//   version: "weekly"
// });

// loader.load().then(() => {
//   this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// });

  }

  // ngAfterViewInit() {
  //   this.loadMap();
  // }

  // loadMap() {
  //   let latLng = new google.maps.LatLng(
  //     this.latitude, this.longitude
  //   );
  //   let mapOptions = {
  //     center: latLng,
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  // }

}
