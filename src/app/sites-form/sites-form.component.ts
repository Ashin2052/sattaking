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
  changePlaceName(i, list, event)
  {

  }
  mode()
  {
    
  }
  updateSlotNmae(i, list, event)
  {

  }
  changeValue(i, list, $event)
  {

  }
  updateValue(i, list, $event)
  {

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
