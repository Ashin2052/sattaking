import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public jwtHelper: JwtHelperService

  loginErr;
  constructor(private Service:ServicesService,private router:Router) { 

    this.jwtHelper = new JwtHelperService();

  }
  user={
    userName:'',
    passWord:''
  };
  ngOnInit() {
    this.routeChange()
  }

  routeChange()
  {
    const token = JSON.parse(localStorage.getItem('sattaToken'));
    if(token)
    {
      if(!this.jwtHelper.isTokenExpired(token.jwtToken))
      {
       this.router.navigateByUrl('admin')
     }
    }
     
  }
  login(user)
  {
    this.Service.login(user).subscribe((response:any)=>
    {
      if(response)
      {    
        
          //  console.log(response.userMap.id,"response")
           localStorage.setItem('sattaToken', JSON.stringify(response));
            this.router.navigateByUrl('admin')
           return true;

    }},(error)=>{
      this.loginErr="username or password error";
      console.log("loginErr")
      // console.log(this.loginError,"error")

      
    }
    )
  }
}
