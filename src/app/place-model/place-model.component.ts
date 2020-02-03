import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter, Input } from '@angular/core';
import * as moment from 'moment';
import { ValueServiceService } from '../services/value-service.service';
declare var $: any;

@Component({
  selector: 'app-place-model',
  templateUrl: './place-model.component.html',
  styleUrls: ['./place-model.component.css']
})
export class PlaceModelComponent implements OnInit {
  recievedValue: string;
  farizawad = []
  deshawar = []
  harion = []
  Goa = []
  ads = []
  placeAbbvr: string;
  selectedYearAsText: number;
  selectedMonthIndex: number;
  endOfMonth: number;
  startofMonth: number;
  endOfM: Number;
  placeName: string;
  constructor(private valueServce: ValueServiceService) { }

  ngOnInit() {
    this.startofMonth = Number(moment().startOf('month').format('x'));
    this.endOfM = Number(moment().endOf('month').format('x'))
    this.SearchByMonth()

  }
  @Input() set passedUserValue(value) {
    if (value) {
      this.startofMonth = Number(moment().startOf('month').format('x'));
      this.endOfM = Number(moment().endOf('month').format('x'))
      this.harion = []
      this.ads = []
      this.deshawar = []
      this.Goa = []
      this.farizawad = []
      console.log(value);
      this.placeAbbvr = value.placeAbbvr
      this.recievedValue = value.placeName;
      this.SearchByMonth()
      // console.log(this.newUser, "this.newUser ,makfma")
    }
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
    this.startofMonth = Number(moment(new Date(this.selectedYearAsText, this.selectedMonthIndex, 1)).format('x'))
    this.endOfM = Number(moment(new Date(this.selectedYearAsText, this.selectedMonthIndex, this.endOfMonth)).format('x'))
    console.log(this.startofMonth, this.endOfM, "jkj")
  }

  SearchByMonth() {
    this.harion = []
    this.ads = []
    this.deshawar = []
    this.Goa = []
    this.farizawad = []
    this.valueServce.monthValueExtra(this.recievedValue, this.startofMonth, this.endOfM).subscribe((response: any) => {
      response.forEach(element => {
        console.log(element)
        if (element.placeName == "harion") {
          this.harion.push(element)
        }
        else if (element.placeName == "ads") {
          this.ads.push(element)

        }
        else if (element.placeName == this.recievedValue) {
          this.deshawar.push(element)

        }
        else if (element.placeName = "Goa") {
          this.Goa.push(element)
        }
        else {
          this.farizawad.push(element)
        }

      });

    })
  }
  exampleModel() {
    $("#exampleModal").css("z-index", "999999 !important")
  }
  close()
  {
    console.log("ashin")
  }
}
