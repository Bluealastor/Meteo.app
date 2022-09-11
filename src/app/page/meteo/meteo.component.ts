import { Component, Input, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  @Input() city: string | undefined;
  meteo: any;

  constructor(private http: HttpClient) {
    
    // console.log(this.meteo)


   }
   ngOnInit() {
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=e1677c46d3c893f6797cd1294c4929ee`)
    .subscribe((data: any)=> this.meteo = data)
  
   }

// interface meteo {
//   name: string;
//   id:number;
// }
}
