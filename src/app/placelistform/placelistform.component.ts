import { EventEmitter, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import {ToastContainerDirective, ToastrService } from 'ngx-toastr';

import { Router, ActivatedRoute } from '@angular/router';
import { PlaceServiceService } from '../services/place-service.service';
import { PlaceModel } from './place.model';
declare var $: any;

@Component({
  selector: 'app-placelistform',
  templateUrl: './placelistform.component.html',
  styleUrls: ['./placelistform.component.css']
})
export class PlacelistformComponent implements OnInit {
  urlId;
  submitted: boolean = false;

  placeModel=new PlaceModel()
  placeAddForm: FormGroup;
  @ViewChild("createPlace", { static: false }) formData: NgForm;
  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor( private toastr: ToastrService,private router: Router,private placeService: PlaceServiceService, private formBuilder: FormBuilder,private activateRoute:ActivatedRoute) { }
  

  ngOnInit() {
    this.toastr.overlayContainer = this.toastContainer;

    this.placeAddForm = this.formBuilder.group({
      placeName: ['', <any>Validators.required],
      placeAbbvr: ['', <any>Validators.required],
      placeTime: ['', <any>Validators.required]

    })
    this.urlId=this.activateRoute.snapshot.paramMap.get('id')
 this.chooseOptions()


  }
  get f() { return this.placeAddForm.controls; }
  chooseOptions()
  {
 if(this.urlId && typeof(this.urlId)!="undefined")
 {
   this.placeService.getParticularPlace(this.urlId).subscribe((response:any)=>
   {
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
     this.toastr.success("Place successfully saved")
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
      this.placeService.savePlace(this.placeModel).subscribe((response):any=>{
       this.router.navigateByUrl('admin')
       this.toastr.success("Place successfully saved")
      },err=>
      {
        this.toastr.error("Place saved unsuccessfull!!!","",{ positionClass: 'toast-top-center'})
      })
    }

  }
  cancelStory()
  {
    this.router.navigateByUrl('admin')
    this.placeModel=new PlaceModel()
  }
}
