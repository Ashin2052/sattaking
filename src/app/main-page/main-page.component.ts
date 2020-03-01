import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ValueServiceService } from '../services/value-service.service';
import { SiteServicesService } from '../services/site-services.service';
import { PlaceServiceService } from '../services/place-service.service';
import { Values } from '../values/values.model';
import 'moment/locale/de';
import { MonthValues } from './monthValue';
import { SendValue } from './SendValueModel';
import { Title, Meta } from '@angular/platform-browser';
import { FacebookService, InitParams } from 'ngx-facebook';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  searchMonthDisplay: any;
  mnthDisplay: any;
  dateDisplayFalg: boolean = false;
  sendName: any;
  selectedYearAsText: number;
  selectedMonthIndex: number;
  endOfMonth: number;
  startofMonth: number;
  endofM: number;
  deshawar = []
  harion = []
  ads = []
  monthValue = new MonthValues();
  todayTable = [];
  todaySiteList = []
  values = new Values()
  allPlaceCount: number;
  yesTerdayTable = []
  allPlaceTable = [];
  siteValue = new Array();
  endDay: number;
  savedResponse = [];
  startDay: number;
  yesterDay: any;
  today: any;
  yesterdayStartDate: any;
  yesterdayEndDate: any
  fmarqueList: string = ''
  marqueList = []
  constructor(private valueServce: ValueServiceService,
    private placeService: PlaceServiceService,
    private facebookService: FacebookService,
    private siteService: SiteServicesService,
    private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.marqueList = []
    this.initFacebookService();
    this.title.setTitle('Dream Satta king')
    this.meta.addTag({ name: 'description', Content: 'Sattaking result of various sites' })
    this.startofMonth = Number(moment().startOf('month').format('x'));
    this.endofM = Number(moment().endOf('month').format('x'))
    this.SearchByMonth()
    this.yesterdayEndDate = moment().subtract(1, 'days').endOf('day').format('x');
    this.yesterdayStartDate = moment().subtract(1, 'days').startOf('day').format('x')
    this.yesterDay = moment().locale('en').subtract(1, 'days').format('LL');
    this.today = moment().locale('en').format('LL');
    this.startDay = Number(moment().startOf('day').format('x'))
    this.endDay = Number(moment().endOf('day').format('x'))

    // console.log(this.yesterdayStartDate,this.yesterdayEndDate)
    this.getAllPlaceCount()

    this.getTodaySiteList()

  }

  initFacebookService() {
    const initParams: InitParams = { xfbml: true, version: 'v3.2' };
    this.facebookService.init(initParams);
  }
  getAllPlaceCount() {
    this.placeService.getAllPlace().subscribe((response: any) => {
      this.allPlaceTable = response;
      this.allPlaceCount = response.length;
      this.getTodayList()

      this.getYesterdayList()
    })
  }

  getTodayList() {
    this.valueServce.checkTodayValue(this.startDay, this.endDay).subscribe((response: any) => {
      if (response === undefined || response.length == 0) {
        this.getAllPlace()
      }
      else {
        if (response && response.length < this.allPlaceCount) {
          this.getAllPlace()
        }
        else {
          // console.log(response.length,this.allPlaceCount)
          this.todayTable = response;
          this.todayTable.forEach((elem) => {
            this.marqueList.push(elem.placeName + '-' + elem.placeValue)


          })
          console.log(this.marqueList)
          this.fmarqueList = this.marqueList.join(" .  ")
          return;
        }
      }
    })
  }
  getAllPlace() {
    this.placeService.getAllPlace().subscribe((response: any) => {
      response.forEach(element => {
        this.values.placeAbbvr = element.placeAbbvr
        this.values.placeName = element.placeName
        this.values.placeValue = 'XX';
        this.values.highlight=element.highlight
        this.values.uploadedTime = Number(moment().format('x'))

        this.valueServce.savevalue(this.values, this.startDay, this.endDay).subscribe((response: any) => {
          this.todayTable.push(response)
        })
      });
      this.fmarqueList = this.todayTable.join(" . ")

    }, err => {
      return;
    })


  }
  getYesterdayList() {
    this.valueServce.checkTodayValue(this.yesterdayStartDate, this.yesterdayEndDate).subscribe((response: any) => {
      this.yesTerdayTable = response;
    })
  }
  getTodaySiteList() {
    this.siteService.getTodaySiteValue(this.startDay, this.endDay).subscribe((response: any) => {
      this.todaySiteList = response
      console.log(response, "fas")
    })
  }
  getBackgroundColor(highlight)
  {
if(highlight)
{
  console.log(highlight)
  return '#ffc107'
}
else
{
  return null;

}
  }
  ngOnDestroy() {
    this.allPlaceCount = null;
    this.todayTable = [];
    this.yesTerdayTable = []
    this.values = new Values();
    this.savedResponse = [];


  }


  onChange(event: { monthIndex: number, year: number }) {
    this.endOfMonth = 30;
    this.selectedYearAsText = event.year
    this.selectedMonthIndex = event.monthIndex;
    if (this.selectedMonthIndex == 1) {
      this.endOfMonth = 28;
    }
    else if (this.selectedMonthIndex % 2 == 0) {
      this.endOfMonth = 31;
    }
    else {
      this.endOfMonth = 30;
    }
    this.searchMonthDisplay = moment(new Date(this.selectedYearAsText, this.selectedMonthIndex, 1)).format('L')
    this.startofMonth = Number(moment(new Date(this.selectedYearAsText, this.selectedMonthIndex, 1)).format('x'))
    this.endofM = Number(moment(new Date(this.selectedYearAsText, this.selectedMonthIndex, this.endOfMonth)).format('x'))
    console.log(this.startofMonth, this.endofM, "jkj")
  }
  SearchByMonth() {
    this.harion = []
    this.ads = [];
    this.deshawar = [];
    this.mnthDisplay = moment(this.startofMonth.toString()).format("MMMM  YYYY");               // Feb 5th 20

    this.valueServce.monthValue(this.startofMonth, this.endofM).subscribe((response: any) => {
      response.forEach(element => {
        if (element.placeName == "harion") {
          this.harion.push(element)
        }
        else if (element.placeName == "ads") {
          this.ads.push(element)

        }
        else {
          this.deshawar.push(element)

        }

      });

    })
    this.dateDisplayFalg = true;
  }
  sendList(list) {
    this.sendName = list;
  }
}
