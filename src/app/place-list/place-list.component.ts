import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addPlace()
  {
    console.log("add place")
    this.router.navigateByUrl('placeadd');
  }

}
