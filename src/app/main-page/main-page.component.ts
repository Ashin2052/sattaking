import { Component, OnInit } from '@angular/core';
import * as moment  from 'moment';
import { ValueServiceService } from '../services/value-service.service';
import { SiteServicesService } from '../services/site-services.service';
import { PlaceServiceService } from '../services/place-service.service';
import { Values } from '../values/values.model';
import 'moment/locale/de';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  todayTable=[];
  todaySiteList=[]
  values=new Values()
  allPlaceCount:number;
  yesTerdayTable=[]
  allPlaceTable=[];
  siteValue=new Array();
  endDay:number;
savedResponse=[];
startDay:number;
yesterDay:any;
today:any;
yesterdayStartDate:any;
yesterdayEndDate:any
  constructor(private valueServce:ValueServiceService,
    private placeService:PlaceServiceService,
    private siteService:SiteServicesService) { }

  ngOnInit() {
    this.yesterdayEndDate=moment().subtract(1, 'days').endOf('day').format('x'); 
    this.yesterdayStartDate=moment().subtract(1, 'days').startOf('day').format('x')
    this.yesterDay=moment().subtract(1, 'days').format('LL'); 
    this.today=moment().format('LL'); 
    this.startDay=Number(moment().startOf('day').format('x'))
    this.endDay=Number(moment().endOf('day').format('x'))

    console.log(this.yesterdayStartDate,this.yesterdayEndDate)
    this.getAllPlaceCount()
    
  this.getTodaySiteList()

  }

getAllPlaceCount()
{
  this.placeService.getAllPlace().subscribe((response:any)=>
  {
this.allPlaceTable=response;
this.allPlaceCount=response.length;
this.getTodayList()

this.getYesterdayList()
  })
}

  getTodayList()
  {
    this.valueServce.checkTodayValue(this.startDay,this.endDay).subscribe((response:any)=>
    {
      if (response === undefined || response.length == 0) {
     this. getAllPlace()
      }
      else
      {
             if(response && response.length<this.getAllPlaceCount)
    { 
      this.getAllPlace()
    }
    else
    {
      console.log(response.length,this.allPlaceCount)
      this.todayTable=response;
      return;
    }
      }  })
  }
  getAllPlace()
  {
    this.placeService.getAllPlace().subscribe((response:any)=>
    { 
      response.forEach(element => {
        this.values.placeName=element.placeName
        this.values.placeValue='XX';
        this.values.uploadedTime=Number(moment().format('x'))
 
        this.valueServce.savevalue(this.values,this.startDay,this.endDay).subscribe((response:any)=>
        {
          this.todayTable.push(response)
        })
      });
    },err=>
    {
      return;
    })
 

  }
  getYesterdayList()
  {
    this.valueServce.checkTodayValue(this.yesterdayStartDate,this.yesterdayEndDate).subscribe((response:any)=>
    {
      this.yesTerdayTable=response;
    })
  }
  getTodaySiteList()
  {
    this.siteService.getTodaySiteValue(this.startDay,this.endDay).subscribe((response:any)=>
    {
      this.todaySiteList=response
      console.log(response,"fas")
    })
  }
  ngOnDestroy()	
  {
this.getAllPlaceCount=null;
this.todayTable=[];
this.yesTerdayTable=[]
this.values=new Values();
this.savedResponse=[];


}

selectedYearAsText: string;
selectedMonthIndex: string;
selectedMonthAsText: string;

onChange(event: { monthIndex: number, year: number }) {
  
  this.selectedYearAsText = event.year.toString();
  this.selectedMonthIndex = event.monthIndex.toString();
  this.selectedMonthAsText = moment().month(event.monthIndex).format('MMMM');
 console.log(moment(this.selectedYearAsText,this.selectedMonthIndex).format('YY-MM'))
  console.warn(this.selectedYearAsText, this.selectedMonthAsText, `(month index: ${this.selectedMonthIndex})`);
}
}
