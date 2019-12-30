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

  loginError;
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
    const token = JSON.parse(localStorage.getItem('token'));
    if(token)
    {
      if(!this.jwtHelper.isTokenExpired(token.jwtToken))
      {
       this.router.navigateByUrl('login')
     }
    }
     
  }
  login(user)
  {
    console.log(user,"user")
    this.Service.login(user).subscribe((response:any)=>
    {
      if(response)
      {    

          //  console.log(response.userMap.id,"response")
           localStorage.setItem('token', JSON.stringify(response));
            this.router.navigateByUrl('')
           return true;

    }},(error)=>{
      this.loginError="your username or password mismatch";
      // console.log(this.loginError,"error")

      
    }
    )
  }
}
