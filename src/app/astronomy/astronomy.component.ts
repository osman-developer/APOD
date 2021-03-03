import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astronomy',
  templateUrl: './astronomy.component.html',
  styleUrls: ['./astronomy.component.css']
})
export class AstronomyComponent implements OnInit {
  APOD: any = [];
  constructor(private api: HttpClient) {
    this.api.get('https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY')
      .subscribe(
        x => { this.APOD = x; }
      )
  }

  ngOnInit(): void {
  }

}
