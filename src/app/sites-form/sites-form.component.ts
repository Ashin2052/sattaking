import { Component, OnInit } from '@angular/core';
import { SiteModel } from './sites.model';
import { SiteAttribute } from './setAttbr';

SiteModel
@Component({
  selector: 'app-sites-form',
  templateUrl: './sites-form.component.html',
  styleUrls: ['./sites-form.component.css']
})
export class SitesFormComponent implements OnInit {
  urlId;
  allValueList=[];
  siteModel=new SiteModel();
  siteAttribute=new SiteAttribute()
 
  constructor( ) { }

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
  deleteValue(i)
  {
    this.allValueList.splice(i, 1);

  }
cancelSite()
{

}
saveSite()
{

}

}
