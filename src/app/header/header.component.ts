import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public jwtHelper: JwtHelperService
 hShow:boolean=false;
  constructor() { 
    this.jwtHelper = new JwtHelperService();

  }

  ngOnInit() {

    const token = JSON.parse(localStorage.getItem('sattaToken'));
    if(token)
    {
      if(!this.jwtHelper.isTokenExpired(token.jwtToken))
      { 
        this.hShow=true
       }
    }
  }
}
