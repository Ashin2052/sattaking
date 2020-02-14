import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private meta:Meta,private title:Title)
  {

  }
  ngOnInit()
  {
this.title.setTitle('Dream Sattaking')
this.meta.addTag({name: 'description',Content:'Sattaking result of various sites'})
  }
}
