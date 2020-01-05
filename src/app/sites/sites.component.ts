import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteServicesService } from '../services/site-services.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  allSiteList=[]
  constructor(private siteService:SiteServicesService,private router:Router ) { }

  ngOnInit() {
    this.getAllSite()

  }
getAllSite()
{
this.siteService.getAllsite().subscribe((response:any)=>
{
this.allSiteList=response;
})
}
delete(id, i)
  {

  }
  addSite()
  {
this.router.navigateByUrl('siteAdd')
  }
  editPlace(list)
  {
    this.router.navigateByUrl('siteAdd/'+list._id)
  }
}
