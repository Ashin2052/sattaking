import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValueServiceService {

  constructor(private httpClient: HttpClient) { }

  baseUrl=environment.baseUrl+'rest/v1/value/';
  sattaToken :any;

savevalue(value,startDay,endDay)
{
  var finalUrl=this.baseUrl+"startEnd?startDay="+startDay+'&&endDay='+endDay;
 

  
  return this.httpClient.post(finalUrl,value,);
}
checkTodayValue(startDay,endDay)
{
  var finalUrl=this.baseUrl+"startEnd?startDay="+startDay+'&&endDay='+endDay;
  return this.httpClient.get(finalUrl); 
}
deletevalue(id)
{
 if(localStorage.getItem('sattaToken'))
 
  return this.httpClient.delete(this.baseUrl+id);
}

updatevalue(id,value)
{

  return this.httpClient.put(this.baseUrl+id,value);
}



  getAllvalue()
  {
   if(localStorage.getItem('sattaToken'))
 
    return this.httpClient.get(this.baseUrl);
  }

getParticularvalue(id)
{
 
  return this.httpClient.get(this.baseUrl+id);
}}
