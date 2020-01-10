import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
hShow:boolean=false;
  constructor(private router: Router) { }

  ngOnInit() {
    var token=localStorage.getItem('sattaToken')
    if(token)

{
  this.hShow=true;
} 
 }

  logOut()
  {
  this.router.navigateByUrl('login')
  localStorage.clear();
    
  }
}
