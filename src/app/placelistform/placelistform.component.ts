import { EventEmitter, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaceServiceService } from '../services/place-service.service';
import { PlaceModel } from './place.model';
declare var $: any;

@Component({
  selector: 'app-placelistform',
  templateUrl: './placelistform.component.html',
  styleUrls: ['./placelistform.component.css']
})
export class PlacelistformComponent implements OnInit {
  
  placeModel=new PlaceModel()
  constructor(private placeService: PlaceServiceService) { }

  ngOnInit() {
  }


}
