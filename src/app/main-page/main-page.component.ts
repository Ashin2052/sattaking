import { Component, OnInit } from '@angular/core';
import * as moment  from 'moment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  endDay:number;
savedResponse=[];
startDay:number;
yesterDay:any;
today:any;
yesterdayStartDate:any;
yesterdayEndDate:any
  constructor() { }

  ngOnInit() {
    this.yesterdayEndDate=moment().subtract(1, 'days').endOf('day').format('x'); 
    this.yesterdayStartDate=moment().subtract(1, 'days').startOf('day').format('x')
    this.yesterDay=moment().subtract(1, 'days').format('LL'); 
    this.today=moment().format('LL'); 
    this.startDay=Number(moment().startOf('day').format('x'))
    this.endDay=Number(moment().endOf('day').format('x'))

    console.log(this.yesterdayStartDate,this.yesterdayEndDate)
  }

}
