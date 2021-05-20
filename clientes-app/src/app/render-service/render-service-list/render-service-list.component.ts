import { Component, OnInit } from '@angular/core';
import { RenderServiceService } from 'src/app/render-service.service';
import { RenderServiceSearch } from './RenderServiceSearch';

@Component({
  selector: 'app-render-service-list',
  templateUrl: './render-service-list.component.html',
  styleUrls: ['./render-service-list.component.css']
})
export class RenderServiceListComponent implements OnInit {

  name:string
  month:number
  months:number[]
  list:RenderServiceSearch[];

  constructor(
    private service: RenderServiceService
  ) {
    this.months = [1,2,3,4,5,6,7,8,9,10,11,12]
   }

  ngOnInit(): void {
  }

  search(){
    this.service.search(this.name, this.month)
  }

}
