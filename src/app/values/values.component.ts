import { Component, OnInit } from '@angular/core';
import { Values } from './values.model';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
values=new Values();

  constructor() { }

  ngOnInit() {
  }

}
