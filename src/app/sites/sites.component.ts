import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {
  }

delete(id, i)
  {

  }
  addSite()
  {
this.router.navigateByUrl('siteAdd')
  }
}
