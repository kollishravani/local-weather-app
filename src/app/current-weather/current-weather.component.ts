import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from 'src/app/weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

 /* 
 constructor() { 
    this.current = {
      city: 'Milpitas',
      country: 'US',
      date: new Date(),
      image: '',
      temperature: 72,
      description: 'Prema'
    };
  }
  */
  constructor(private weatherService: WeatherService) { 
  }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Bethesda','US').subscribe((data) => this.current = data )
  }

}
