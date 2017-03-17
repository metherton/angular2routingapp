import { Component, OnInit } from '@angular/core';

export class City {
  constructor(public name: string, public latitude: string, public longitude: string) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities: any[];
  title: string;
  startCity: City;
  endCity:  City;

  ngOnInit() {
    this.title = 'Routing Application';
    this.startCity = new City('New York', '40.0', '-73.5');
    this.endCity = new City('Tokyo', '35.0', '139.5');
    this.cities = [this.startCity, this.endCity];
  }

}
