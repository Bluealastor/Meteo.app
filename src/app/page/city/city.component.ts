import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

citye: any

  constructor(private http: HttpClient) {
   

   }

  ngOnInit() {

    this.http.get("https://api.musement.com/api/v3/cities").subscribe((res:any) => this.citye = res)
    console.log(this.citye.result)
  }

}

interface cityes{
  id: number;
  uuid: string;
  name : string;
  content:string;
  meta_title:string;
  cover_image_url:string;
  url:string;
}
