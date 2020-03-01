import { EventEmitter, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import {ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaceServiceService } from '../services/place-service.service';
import { PlaceModel } from './place.model';
import { ValueServiceService } from '../services/value-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Values } from '../values/values.model';
import * as moment  from 'moment';
declare var $: any;

@Component({
  selector: 'app-placelistform',
  templateUrl: './placelistform.component.html',
  styleUrls: ['./placelistform.component.css']
})
export class PlacelistformComponent implements OnInit {
  placeEdit:boolean=true;
  urlId;
  submitted: boolean = false;
  startDay:number;
endDay:number;
  placeModel=new PlaceModel()
  placeAddForm: FormGroup;
  @ViewChild("createPlace", { static: false }) formData: NgForm;
  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor(private activatedRoute: ActivatedRoute,private ValueServiceService:ValueServiceService, private toastr: ToastrService,private router: Router,private placeService: PlaceServiceService, private formBuilder: FormBuilder,private activateRoute:ActivatedRoute) { }
  

  ngOnInit() {
   
    this.toastr.overlayContainer = this.toastContainer;
    this.startDay=Number(moment().startOf('day').format('x'))
    this.endDay=Number(moment().endOf('day').format('x'))
    this.placeAddForm = this.formBuilder.group({
      placeName: ['', <any>Validators.required],
      highlight: [false],

      placeAbbvr: ['', <any>Validators.required],
      placeTime: ['', <any>Validators.required]

    })
    this.urlId=this.activateRoute.snapshot.paramMap.get('id')
    if(this.urlId)
    {
      this.placeEdit=false
    }
 this.chooseOptions()


  }
  get f() { return this.placeAddForm.controls; }
  chooseOptions()
  {
 if(this.urlId && typeof(this.urlId)!="undefined")
 {
   this.placeService.getParticularPlace(this.urlId).subscribe((response:any)=>
   {
     this.placeAddForm.get('placeName').setValue(response.placeName)
     this.placeModel=response;
   })
 }
  }

  saveEditOptions()
{
  if(this.urlId && typeof(this.urlId)!="undefined")
{
  this.update()
}
else
{
  this.save()
}


}
onToggle(event)
{
this.placeModel.highlight=event.srcElement.checked;
}
update()
{
  this.submitted=true;
  if(this.placeAddForm.invalid)
  {
    return;
  }
  else
  {
    this.placeService.updatePlace(this.urlId,this.placeModel).subscribe((response):any=>{
     this.router.navigateByUrl('admin')
     console.log(response,"rep")
     this.toastr.success("Place successfully updated")
    },err=>
    {
      this.toastr.error("Place saved unsuccessfull!!!","",{ positionClass: 'toast-top-center'})
    })
  }
}

  save()
  { 
    this.submitted=true;
    if(this.placeAddForm.invalid)
    {
      return;
    }
    else
    {
      this.placeModel.placeName=this.placeModel.placeName.toUpperCase()
      this.placeService.savePlace(this.placeModel).subscribe((response):any=>{
       this.router.navigateByUrl('admin')
       this.addPlaceValue(response)
       this.toastr.success("Place successfully saved")
      },err=>
      {
        this.toastr.error("Place saved unsuccessfull!!!","",{ positionClass: 'toast-top-center'})
      })
    }

  }
  addPlaceValue(response)
  {
var valu=new Values()
valu.placeName=response.placeName;
valu.placeValue='XX'
valu.placeAbbvr=response.placeAbbvr
valu.highlight=response.highlight;
valu.uploadedTime=Number(moment().format('x'))
this.ValueServiceService.savevalue(valu,this.startDay,this.endDay).subscribe((response:any)=>
{
  this.toastr.success("Place Successfully added")
})
  }
  cancelStory()
  {
    this.router.navigateByUrl('admin')
    this.placeModel=new PlaceModel()
  }
}
