import { Component, OnInit } from '@angular/core';
import { SiteModel } from './sites.model';
import { SiteAttribute } from './setAttbr';
import { SiteServicesService } from '../services/site-services.service';
import { Router } from '@angular/router';


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
  placeSameError:boolean=true;
  siteAttribute=new SiteAttribute()
  placeList=["asdas","zcxz","adsasd","asd"]
  constructor(private siteService:SiteServicesService,private router:Router ) { }

  ngOnInit() {
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
    this.allValueList[i].value = event.srcElement.value

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

}
saveSite()
{

  this.checKplace()
if(this.placeSameError)
{  this.placeSameError=false;

  return ;
}
if(this.siteModel.siteName )
{
  this.siteModel.siteValue=this.allValueList;
this.siteService.savesite(this.siteModel).subscribe((res:any)=>
{
  console.log(res)
  this.allValueList=[];
  this.siteAttribute=new SiteAttribute()
  this.siteModel=new SiteModel()
},err=>
{

})
}
}

}
