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
  urlId;
  submitted: boolean = false;

  placeModel=new PlaceModel()
  placeAddForm: FormGroup;
  @ViewChild("createPlace", { static: false }) formData: NgForm;

  constructor(private placeService: PlaceServiceService, private formBuilder: FormBuilder,private activateRoute:ActivatedRoute) { }
  

  ngOnInit() {
    this.placeAddForm = this.formBuilder.group({
      placeName: ['', <any>Validators.required],
      placeAbbvr: ['', <any>Validators.required],
      placeTime: ['', <any>Validators.required]

    })
    this.urlId=this.activateRoute.snapshot.paramMap.get('id')



  }
  get f() { return this.placeAddForm.controls; }

  saveEditOptions()
  {

  }
  cancelStory()
  {
    
  }
}
