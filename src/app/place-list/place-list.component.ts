import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceServiceService } from '../services/place-service.service';
import {ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
allPlaceList=[];
p: number = 1;
@ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor(private router: Router,private placeServce:PlaceServiceService,private toastr:ToastrService) { }

  ngOnInit() {
    this.toastr.overlayContainer = this.toastContainer;

    this.getAllPlace()
  }

  addPlace()
  {
    console.log("add place")
    this.router.navigateByUrl('placeadd');
  }
  getAllPlace()
  {
this.placeServce.getAllPlace().subscribe((response:any)=>
{
  this.allPlaceList=response;
})
  }
  editBind(list)
  {
this.router.navigateByUrl('placeadd/'+list._id)
  }
  delete(id, i)
  {
    if (window.confirm("Do yo reallly want to delete??")) {
      this.placeServce.deletePlace(id).subscribe((response: any) => {
        
        this.allPlaceList.splice(i, 1)
        this.toastr.success("Delete successfull")
      })
    }
  }
}
