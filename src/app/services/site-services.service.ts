import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteServicesService {

  baseUrl=environment.baseUrl+'/rest/v1/site/';
  sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken
  constructor(private httpClient: HttpClient) { }

savesite(site)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken
 console.log(this.baseUrl,site)
  return this.httpClient.post(this.baseUrl,site,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}

deletesite(id)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.delete(this.baseUrl+id,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}

updatesite(id,value)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.put(this.baseUrl+id,value,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}



  getAllsite()
  {
    this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

    return this.httpClient.get(this.baseUrl,{
      headers:new HttpHeaders({
        Authorization:this.sattaToken
      })
    });
  }

getParticularsite(id)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.get(this.baseUrl+id,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}
}
