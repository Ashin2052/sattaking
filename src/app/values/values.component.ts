import { Component, OnInit } from '@angular/core';
import { Values } from './values.model';
import { PlaceServiceService } from '../services/place-service.service';
import { ValueServiceService } from '../services/value-service.service';
import * as moment  from 'moment';
import { ThrowStmt } from '@angular/compiler';
declare var $: any;

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
values=new Values();
editValue;
upVal;
tableIndex;
updateId;
p: number = 1;
placeList=[]
valueTable=[]
endDay:number;
savedResponse=[];
startDay:number;
  constructor(private placeServiceService:PlaceServiceService,private valueServiceService:ValueServiceService) { }

  ngOnInit() {
    this.startDay=Number(moment().startOf('day').format('x'))
    this.endDay=Number(moment().endOf('day').format('x'))
    console.log(moment().format('x'))
    this.checkTodayValue()
    // this.getAllPlace()


  }
 checkTodayValue()
{
  this.valueServiceService.checkTodayValue(this.startDay,this.endDay).subscribe((response:any)=>
  {
    if(response && response.length>1)
    {
      this.valueTable=response;
      return;
    }
    else
    {
      this.getAllPlace()
    }
  })
}

receivedData(newData) {
  let index = this.valueTable.findIndex(x => x._id == newData._id);
  if (index == -1) {
    this.valueTable.push(newData);
  } else {
    this.valueTable[index] = newData;
  }

}
  getAllPlace()
  {
    this.placeServiceService.getAllPlace().subscribe((response:any)=>
    { 
      response.forEach(element => {
        this.values.placeName=element.placeName
        this.values.placeValue='XX';
        this.values.uploadedTime=Number(moment().format('x'))
 
        this.valueServiceService.savevalue(this.values,this.startDay,this.endDay).subscribe((response:any)=>
        {
          this.valueTable.push(response)
        })
      });
    },err=>
    {
      return;
    })
 

  }
  onChange(event:any)
  {
  this.values.placeName=event.srcElement.value;
  console.log(event.srcElement.value)

  }
modo()
{
  this.values.uploadedTime=Number(moment(new Date()).format('X'))

  if(this.values.placeValue && this.values.uploadedTime)
  {
    console.log(this.values)
    this.valueServiceService.savevalue(this.values,this.startDay,this.endDay).subscribe((response:any)=>
    {
      this.valueTable.push(response)
    })
  }

}
updateValue(list,i)
{
    
    this.editValue = { ...list };
    $('#exampleModal').modal({
      show: true, 
      backdrop: 'static',
      keyboard: true
   })
}


}
