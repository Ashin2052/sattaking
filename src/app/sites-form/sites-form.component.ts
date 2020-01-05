import { Component, OnInit, ViewChild } from '@angular/core';
import { SiteModel } from './sites.model';
import { SiteAttribute } from './setAttbr';
import { SiteServicesService } from '../services/site-services.service';
import { Router,ActivatedRoute } from '@angular/router';
import {ToastContainerDirective, ToastrService } from 'ngx-toastr';


SiteModel
@Component({
  selector: 'app-sites-form',
  templateUrl: './sites-form.component.html',
  styleUrls: ['./sites-form.component.css']
})
export class SitesFormComponent implements OnInit {
  urlId;
  allValueList=<any>[];
  siteModel=new SiteModel();
  placeSameError:boolean=false;
  siteAttribute=new SiteAttribute()
  placeList=["asdas","zcxz","adsasd","asd"]
  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor(private activateRoute:ActivatedRoute, private toastr:ToastrService,private siteService:SiteServicesService,private router:Router ) { }

  ngOnInit() {
    this.urlId=this.activateRoute.snapshot.paramMap.get('id')
    if(this.urlId && (typeof(this.urlId))!="undefined")
{
  this.getInfoForUpdate()
}


  }
  getInfoForUpdate()
  {
    this.siteService.getParticularsite(this.urlId).subscribe((response:any)=>
    {
      this.siteModel.siteName=response.siteName;
      this.allValueList=response.siteValue
    })
  }

  mode()
  {
    if(this.siteAttribute.place && this.siteAttribute.value)
    {
      this.allValueList.push(this.siteAttribute)
      this.siteAttribute=new SiteAttribute();
    }
    else
    {
    this.toastr.warning("Eneter all values properly")
    }

  }
  updatePlaceName(i, list, event)
  {
 const editField = event.target.textContent;
    this.allValueList[i].place = editField;
  }
  changePlaceName(i, list, event)
  {
    const editField = event.target.textContent;

  }
  changeValue(i, list, event)
  {
    const editField = event.target.textContent;

  }
  updateValue(i, list, event)
  {
    const editField = event.target.textContent;
    this.allValueList[i].value = editField;
  }
  updatedPlace(event, i)
  {
    this.allValueList[i].place = event.srcElement.place

  }
  deleteValue(i)
  {
    this.allValueList.splice(i, 1);

  }
cancelSite()
{

}
checKplace()
{
  if(this.allValueList.length<=1)
  {
    this.placeSameError=false;
    return;
  }
for(var i=0;i<this.allValueList.length;i++)
{

  for (var k = i+1; k < this.allValueList.length; k++) {
    if (this.allValueList[i].place == this.allValueList[k].place) {
     this.placeSameError=true;
     console.log("place")
      //do stuff
    }
}}
}
chooMethod()
{
  if(this.urlId && (typeof(this.urlId))!="undefined")
  {
    this.updateSite()
  }
  else
  {
    this.saveSite()
  }
}
updateSite()
{
  // this.checKplace()
if(this.placeSameError)
{  this.placeSameError=false;

  return ;
}
if(this.siteModel.siteName )
{
  this.siteModel.siteValue=this.allValueList;
this.siteService.updatesite(this.urlId,this.siteModel).subscribe((res:any)=>
{
  console.log(res)
  this.router.navigateByUrl('sites')
  this.placeSameError=false;
  this.allValueList=[];
  this.siteAttribute=new SiteAttribute()
  this.siteModel=new SiteModel()
  this.toastr.success(" Sites Successfully updated")
},err=>
{
  this.toastr.error(" Sites update unsuccessful")

})
}
}
saveSite()
{

  // this.checKplace()
if(this.placeSameError)
{  this.placeSameError=false;

  return ;
}
if(this.siteModel.siteName )
{
  this.siteModel.siteValue=this.allValueList;
this.siteService.savesite(this.siteModel).subscribe((res:any)=>
{
  this.router.navigateByUrl('sites')
  console.log(res)
  this.allValueList=[];
  this.siteAttribute=new SiteAttribute()
  this.siteModel=new SiteModel()
  this.toastr.success(" Sites Successfully saved")
  
},err=>
{
  this.toastr.error(" Sites save unsuccessful")

})
}
}

}
