import { Component, OnInit } from '@angular/core';
import * as moment  from 'moment';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedYearAsText: number;
  selectedMonthIndex: number;
   endOfMonth:number;
   startofMonth:number;
   endofM:number;
  onChange(event: { monthIndex: number, year: number }) {
    this.endOfMonth=30;
    this.selectedYearAsText = event.year
    this.selectedMonthIndex = event.monthIndex;
  if(this.selectedMonthIndex==1)
  {
    this.endOfMonth=28;
  }
  else if(this.selectedMonthIndex%2==0)
  {
    this.endOfMonth=31;
  }
  else
  {
    this.endOfMonth=30;
  }
   this.startofMonth=Number(moment(new Date(this.selectedYearAsText,this.selectedMonthIndex,1)).format('x'))
  this.endofM=Number(moment(new Date(this.selectedYearAsText,this.selectedMonthIndex,this.endOfMonth)).format('x'))
  console.log(this.startofMonth,this.endofM,"jkj")
  }
  
  SearchByMonth()
  {
  
  }
}
