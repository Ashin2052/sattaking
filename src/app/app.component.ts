import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
message;
token:tokenip={
  ip:'',
  token:''
}
  constructor(private meta:Meta,private title:Title,private messagingService: MessagingService)
  {

  }
  ngOnInit()
  { this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
this.title.setTitle('Dream Sattaking')
this.meta.addTag({name: 'description',Content:'Sattaking result of various sites'})
  }

  ngAfterViewInit() 
{
  setTimeout(()=>{
    this.messagingService.getIPAddress().subscribe((res:any)=>{  
      this.token.token=JSON.stringify(localStorage.getItem('fireToken'))
      this.token.ip=res.ip

      this.messagingService.setFireToken(this.token).subscribe((res:any)=>
{
  console.log(res,"res")
})
        }); 



  },10000)

}
}

export interface tokenip
{
  ip:string,
  token:string
}