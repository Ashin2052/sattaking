import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SiteServicesService } from '../services/site-services.service';
import {ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  allSiteList=[]
  p: number = 1;
  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor(private toastr:ToastrService,private siteService:SiteServicesService,private router:Router ) { }

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
delete(list, i)
  {
    var r = confirm("Do you want to delete this site Info !");
    if (r == true) {
  this.siteService.deletesite(list._id).subscribe((res:any)=>
  {
    this.allSiteList.splice(i,1)
    this.toastr.success("Deletion Successsful")
    
  })
    }
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
