import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValueServiceService } from '../services/value-service.service';
import * as moment from "moment";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
hShow:boolean=false;
endDay: number;
  savedResponse = [];
  startDay: number;
  constructor(private router: Router,private valueService:ValueServiceService) { }

  ngOnInit() {
    this.startDay = Number(
      moment()
        .startOf("day")
        .format("x")
    );
    this.endDay = Number(
      moment()
        .endOf("day")
        .format("x")
    );
    var token=localStorage.getItem('sattaToken')
    if(token)

{
  this.hShow=true;
} 
 }
 sendSubscribersValue()
 {
this.valueService.sedInfo(this.startDay,this.endDay).subscribe((response:any)=>
{

})
 }
  logOut()
  {
  this.router.navigateByUrl('login')
  localStorage.clear();
    
  }
}
