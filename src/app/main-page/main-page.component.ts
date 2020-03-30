import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { ValueServiceService } from "../services/value-service.service";
import { SiteServicesService } from "../services/site-services.service";
import { PlaceServiceService } from "../services/place-service.service";
import { Values } from "../values/values.model";
import "moment/locale/de";
import { MonthValues } from "./monthValue";
// import {speakeasy} from 'speakeasy'
import { SendValue } from "./SendValueModel";
import { Title, Meta } from "@angular/platform-browser";
import { FacebookService, InitParams } from "ngx-facebook";
import { paragraphServicesService } from "../services/paragraph-services/paragraph-service.service";
import { from } from "rxjs";

declare var $: any;
@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})
export class MainPageComponent implements OnInit {
  searchMonthDisplay: any;
  paragraphList = [];
  mnthDisplay: any;
  dateDisplayFalg: boolean = false;
  sendName: any;
  selectedYearAsText: number;
  selectedMonthIndex: number;
  endOfMonth: number;
  startofMonth: number;
  endofM: number;
  deshawar = [];
  harion = [];
  ads = [];
  monthValue = new MonthValues();
  todayTable = [];
  todaySiteList = [];
  values = new Values();
  allPlaceCount: number;
  yesTerdayTable = [];
  allPlaceTable = [];
  siteValue = new Array();
  endDay: number;
  savedResponse = [];
  startDay: number;
  yesterDay: any;
  today: any;
  yesterdayStartDate: any;
  yesterdayEndDate: any;
  fmarqueList: string = "";
  marqueList = [];
  constructor(
    private valueServce: ValueServiceService,
    private paragraphService: paragraphServicesService,
    private placeService: PlaceServiceService,
    private facebookService: FacebookService,
    private siteService: SiteServicesService,
    private title: Title,
    private meta: Meta
  ) {}
  secrettoken;
  emailForSubscription;
  enterOtpFlag;
  otp;
  otpErrorMessage=null;
  emailForSubsFlag;
  enteredOtpVale;
  ngOnInit() {
    $("#otpModel").modal("show");

    this.marqueList = [];
    this.initFacebookService();
    this.title.setTitle("Dream Satta king");
    this.meta.addTag({
      name: "description",
      Content: "Sattaking result of various sites"
    });
    this.startofMonth = Number(
      moment()
        .startOf("month")
        .format("x")
    );
    this.endofM = Number(
      moment()
        .endOf("month")
        .format("x")
    );
    this.SearchByMonth();
    this.yesterdayEndDate = moment()
      .subtract(1, "days")
      .endOf("day")
      .format("x");
    this.yesterdayStartDate = moment()
      .subtract(1, "days")
      .startOf("day")
      .format("x");
    this.yesterDay = moment()
      .locale("en")
      .subtract(1, "days")
      .format("LL");
    this.today = moment()
      .locale("en")
      .format("LL");
    this.startDay = Number(
      moment()
        .startOf("day")
        .format("x")
    );
    this.endDay = Number(
      moment()
        .endOf("day")
        .format("x")
    );

    // console.log(this.yesterdayStartDate,this.yesterdayEndDate)
    this.getAllPlaceCount();

    this.getTodaySiteList();
    this.getParagraph();
  }
  generateToken() {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.emailForSubscription
      )
    ) {
      this.emailForSubsFlag = false;

      this.secrettoken = Math.floor(
        100000000000000 + Math.random() * 900000000000000
      );
      // this.secrettoken = speakeasy.generateSecret({length: 20});

      this.placeService
        .genetateOtp(this.emailForSubscription, this.secrettoken)
        .subscribe(
          (response: any) => {
            this.enterOtpFlag = true;
            this.otp = response;
          },
          err => {
            this.enterOtpFlag = false;
            this.emailForSubsFlag = true;
          }
        );
    } else {
      this.emailForSubsFlag = true;
    }
  }
  goBack() {
    this.enterOtpFlag = false;
    this.emailForSubsFlag = false;
    this.enteredOtpVale = null;
    this.otpErrorMessage = null;
  }
  closeSubscribeModalBox() {
    $("#otpModel").modal("hide");
    this.emailForSubsFlag = false;
    this.enterOtpFlag = false;
    this.enteredOtpVale = null;
    this.otpErrorMessage = null;
  }

  checkOtp(e) {
    if (this.otp == this.enteredOtpVale) {
      this.valueServce.saveMail(this.emailForSubscription).subscribe(
        (response: any) => {
          this.closeSubscribeModalBox();
        },
        err => {
          this.closeSubscribeModalBox();
        }
      );
    } else {
      this.otpErrorMessage =
        "Otp incorrect.Please check your mail or re-enter you email address. you can re-enter your otp and proceed again if the email you have entered doesn't belong to you or is incorrect.";
    }
  }

  initFacebookService() {
    const initParams: InitParams = { xfbml: true, version: "v3.2" };
    this.facebookService.init(initParams);
  }

  getParagraph() {
    this.paragraphService.getAllparagraph().subscribe((response: any) => {
      response.forEach(element => {
        this.paragraphList.push(element.paragraph);
      });
    });
  }
  getAllPlaceCount() {
    this.placeService.getAllPlace().subscribe((response: any) => {
      this.allPlaceTable = response;
      this.allPlaceCount = response.length;
      this.getTodayList();

      this.getYesterdayList();
    });
  }

  getTodayList() {
    this.valueServce
      .checkTodayValue(this.startDay, this.endDay)
      .subscribe((response: any) => {
        if (response === undefined || response.length == 0) {
          this.getAllPlace();
        } else {
          if (response && response.length < this.allPlaceCount) {
            this.getAllPlace();
          } else {
            // console.log(response.length,this.allPlaceCount)
            this.todayTable = response;
            this.todayTable.forEach(elem => {
              this.marqueList.push(elem.placeName + "-" + elem.placeValue);
            });
            this.fmarqueList = this.marqueList.join(" .  ");
            return;
          }
        }
      });
  }
  getAllPlace() {
    this.placeService.getAllPlace().subscribe(
      (response: any) => {
        response.forEach(element => {
          this.values.placeAbbvr = element.placeAbbvr;
          this.values.placeName = element.placeName;
          this.values.placeValue = "XX";
          this.values.highlight = element.highlight;
          this.values.uploadedTime = Number(moment().format("x"));

          this.valueServce
            .savevalue(this.values, this.startDay, this.endDay)
            .subscribe((response: any) => {
              this.todayTable.push(response);
            });
        });
        this.todayTable.forEach(elem => {
          this.marqueList.push(elem.placeName + "-" + elem.placeValue);
        });
        this.fmarqueList = this.marqueList.join(" . ");
      },
      err => {
        return;
      }
    );
  }
  getYesterdayList() {
    this.valueServce
      .checkTodayValue(this.yesterdayStartDate, this.yesterdayEndDate)
      .subscribe((response: any) => {
        this.yesTerdayTable = response;
      });
  }
  getTodaySiteList() {
    this.siteService
      .getTodaySiteValue(this.startDay, this.endDay)
      .subscribe((response: any) => {
        this.todaySiteList = response;
        console.log(response, "fas");
      });
  }
  getBackgroundColor(highlight) {
    if (highlight) {
      return "#ffc107";
    } else {
      return null;
    }
  }
  ngOnDestroy() {
    this.allPlaceCount = null;
    this.todayTable = [];
    this.yesTerdayTable = [];
    this.values = new Values();
    this.savedResponse = [];
  }

  onChange(event: { monthIndex: number; year: number }) {
    this.endOfMonth = 30;
    this.selectedYearAsText = event.year;
    this.selectedMonthIndex = event.monthIndex;
    if (this.selectedMonthIndex == 1) {
      this.endOfMonth = 28;
    } else if (this.selectedMonthIndex % 2 == 0) {
      this.endOfMonth = 31;
    } else {
      this.endOfMonth = 30;
    }
    this.searchMonthDisplay = moment(
      new Date(this.selectedYearAsText, this.selectedMonthIndex, 1)
    ).format("L");
    this.startofMonth = Number(
      moment(
        new Date(this.selectedYearAsText, this.selectedMonthIndex, 1)
      ).format("x")
    );
    this.endofM = Number(
      moment(
        new Date(
          this.selectedYearAsText,
          this.selectedMonthIndex,
          this.endOfMonth
        )
      ).format("x")
    );
  }
  SearchByMonth() {
    this.harion = [];
    this.ads = [];
    this.deshawar = [];
    this.mnthDisplay = moment(this.startofMonth.toString()).format(
      "MMMM  YYYY"
    ); // Feb 5th 20

    this.valueServce
      .monthValue(this.startofMonth, this.endofM)
      .subscribe((response: any) => {
        response.forEach(element => {
          if (element.placeName == "harion") {
            this.harion.push(element);
          } else if (element.placeName == "ads") {
            this.ads.push(element);
          } else {
            this.deshawar.push(element);
          }
        });
      });
    this.dateDisplayFalg = true;
  }
  sendList(list) {
    this.sendName = list;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.marqueListPopulate();
    }, 10000);
  }
  marqueListPopulate() {
    this.marqueList = [];
    this.todayTable.forEach(elem => {
      this.marqueList.push(elem.placeName + "-" + elem.placeValue);
    });
    this.fmarqueList = this.marqueList.join(" . ");
  }
}
