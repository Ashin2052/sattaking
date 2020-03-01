import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class paragraphServicesService {
  baseUrl=environment.baseUrl+'rest/v1/paragraph/';
  sattaToken:any;
  constructor(private httpClient: HttpClient) { }

saveparagraph(paragraph)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken
 console.log(this.baseUrl,paragraph)
  return this.httpClient.post(this.baseUrl,paragraph,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}

deleteparagraph(id)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.delete(this.baseUrl+id,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}

updateparagraph(id,value)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.put(this.baseUrl+id,value,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}



  getAllparagraph()
  {
    this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

    return this.httpClient.get(this.baseUrl,{
      headers:new HttpHeaders({
        Authorization:this.sattaToken
      })
    });
  }

getParticularparagraph(id)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.get(this.baseUrl+id,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}

}
