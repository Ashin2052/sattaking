import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter, Input } from '@angular/core';
import * as moment  from 'moment';
import { ValueServiceService } from '../services/value-service.service';
declare var $: any;

@Component({
  selector: 'app-place-model',
  templateUrl: './place-model.component.html',
  styleUrls: ['./place-model.component.css']
})
export class PlaceModelComponent implements OnInit {
  deshawar=[]
  harion=[]
  ads=[]
  selectedYearAsText: number;
  selectedMonthIndex: number;
   endOfMonth:number;
   startofMonth:number;
endOfM:Number;
placeName:string;
  constructor(private valueServce:ValueServiceService) { }

  ngOnInit() {
    this.startofMonth=Number(moment().startOf('month').format('x'));
 this.endOfM=Number(moment().endOf('month').format('x'))

  }
  @Input() set passedUserValue(value) {
    if (value) {
      console.log(value);
      // console.log(this.newUser, "this.newUser ,makfma")
    }
  }
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
  this.endOfM=Number(moment(new Date(this.selectedYearAsText,this.selectedMonthIndex,this.endOfMonth)).format('x'))
  console.log(this.startofMonth,this.endOfM,"jkj")
  }
  SearchByMonth()
  {
    this.valueServce.monthValue(this.startofMonth,this.endOfM).subscribe((response:any)=>
    {
      response.forEach(element => {
        if(element.placeName=="harion")
        {
          this.harion.push(element)
        }
        else if(element.placeName=="ads")
        {
          this.ads.push(element)
  
        }
        else
        {
          this.deshawar.push(element)
  
        }
        
      });
  
    })
  }
exampleModel()
{
$("#exampleModal").css("z-index","999999 !important")
}
}
