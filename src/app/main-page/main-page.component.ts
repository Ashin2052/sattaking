import { Component, OnInit } from '@angular/core';
import * as moment  from 'moment';
import { ValueServiceService } from '../services/value-service.service';
import { SiteServicesService } from '../services/site-services.service';
import { PlaceServiceService } from '../services/place-service.service';
import { Values } from '../values/values.model';
import 'moment/locale/de';
import { MonthValues } from './monthValue';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  deshawar=[]
  harion=[]
  ads=[]
  monthValue=new MonthValues();
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
  this.valueServce.monthValue(this.startofMonth,this.endofM).subscribe((response:any)=>
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
}
