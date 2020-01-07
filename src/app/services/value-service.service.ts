import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValueServiceService {

  constructor(private httpClient: HttpClient) { }

  baseUrl=environment.baseUrl+'/rest/v1/value/';
  sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

savevalue(value,startDay,endDay)
{
  var finalUrl=this.baseUrl+"startEnd?startDay="+startDay+'&&endDay='+endDay;
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken
  return this.httpClient.post(finalUrl,value,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}

deletevalue(id)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.delete(this.baseUrl+id,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}

updatevalue(id,value)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.put(this.baseUrl+id,value,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}



  getAllvalue()
  {
    this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

    return this.httpClient.get(this.baseUrl,{
      headers:new HttpHeaders({
        Authorization:this.sattaToken
      })
    });
  }

getParticularvalue(id)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.get(this.baseUrl+id,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}}
