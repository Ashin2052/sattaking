import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl=environment.baseUrl+'rest/v1/';

  constructor(private httpClient: HttpClient) { }

  login(user)
  {
    
    return this.httpClient.post(this.baseUrl+"login/",user);
  }
}
