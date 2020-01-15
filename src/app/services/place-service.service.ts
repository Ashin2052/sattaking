import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceServiceService {

  baseUrl=environment.baseUrl+'/rest/v1/place/';
  sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken
  constructor(private httpClient: HttpClient) { }

savePlace(place)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken
 console.log(this.baseUrl,place)
  return this.httpClient.post(this.baseUrl,place,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}

deletePlace(id)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.delete(this.baseUrl+id,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}

updatePlace(id,value)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.put(this.baseUrl+id,value,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}



  getAllPlace()
  {
console.log(this.baseUrl)
    return this.httpClient.get(this.baseUrl);
  }

getParticularPlace(id)
{
  this.sattaToken = JSON.parse(localStorage.getItem('sattaToken')).jwtToken

  return this.httpClient.get(this.baseUrl+id,{
    headers:new HttpHeaders({
      Authorization:this.sattaToken
    })
  });
}

}
