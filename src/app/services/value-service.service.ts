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
  email={
    email:String
  }
saveMail(emailForSubscription)
{
  var finalUrl=this.baseUrl+'/save/email';
 this.email.email=emailForSubscription

  
  return this.httpClient.post(finalUrl,this.email);
}
sedInfo(startDay,endDay)
{
  var finalUrl=this.baseUrl+"sendinfo?startDay="+startDay+'&&endDay='+endDay;

  
  return this.httpClient.get(finalUrl);
}


savevalue(value,startDay,endDay)
{
  var finalUrl=this.baseUrl+"startEnd?startDay="+startDay+'&&endDay='+endDay;
 

  
  return this.httpClient.post(finalUrl,value,);
}
monthValue(startOfMonth,endOfM)
{
  var finalUrl=this.baseUrl+"getByMonth?startOfMonth="+startOfMonth+'&&endOfM='+endOfM;
  return this.httpClient.get(finalUrl);

}
monthValueExtra(placeName,startOfMonth,endOfM)
{
  var finalUrl=this.baseUrl+"getByPlace?startOfMonth="+startOfMonth+'&&endOfM='+endOfM+"&&place="+placeName;
  return this.httpClient.get(finalUrl); 
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
