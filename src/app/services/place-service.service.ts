import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceServiceService {

  baserUrl=environment.baseUrl+'/rest/v1/';
  constructor(private httpClient: HttpClient) { }

savePlace(place)
{
  return this.httpClient.post(this.baserUrl+"login/",place);

}

deletePlace()
{

}

updatePlace()
{

}



  getAllPlace()
  {

  }

getParticularPlace()
{

}

}
