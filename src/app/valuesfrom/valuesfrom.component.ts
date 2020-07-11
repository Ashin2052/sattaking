import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter, Input } from '@angular/core';
import { Values } from '../values/values.model';
import { ValueServiceService } from '../services/value-service.service';
declare var $: any;

@Component({
  selector: 'app-valuesfrom',
  templateUrl: './valuesfrom.component.html',
  styleUrls: ['./valuesfrom.component.css']
})
export class ValuesfromComponent implements OnInit {

  newValue = new Values()
  @Output() newData = new EventEmitter();
  @Input() set passedUserValue(value) {
    if (value) {
      this.newValue = value;
      // console.log(this.newUser, "this.newUser ,makfma")
    }
  }
  constructor(private valueServiceService: ValueServiceService) { }

  ngOnInit() {
  }
  SaveV(nVal) {
    this.valueServiceService.updatevalue(nVal._id, nVal).subscribe((response: any) => {
      $("#exampleModal").modal("hide");
      // $("#exampleModal").attr( "data-dismiss","modal");
      this.newData.emit(response)


      this.newValue = new Values()


    })
  }


  cancelv() {
    $("#exampleModal").modal("hide");
    this.newValue = new Values()
  }
}
