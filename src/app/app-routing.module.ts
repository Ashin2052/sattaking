import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  AuthGuardService as AuthGuard 
} from '../app/auth/auth.guard'
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlacelistformComponent } from './placelistform/placelistform.component';
import { SitesComponent } from './sites/sites.component';
import { SitesFormComponent } from './sites-form/sites-form.component';
import { ValuesComponent } from './values/values.component';
import { TableComponentComponent } from './table-component/table-component.component';
const routes: Routes = [
  {
    path:'',
    component:MainPageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'table',
    
    component:TableComponentComponent
  },
  {
    path:'admin',
    canActivate:[AuthGuard],

    component:PlaceListComponent
  },
  {
    path:'placeadd',
    canActivate:[AuthGuard],
    component:PlacelistformComponent
  },
  {
    path:'placeadd/:id',
    canActivate:[AuthGuard],
    component:PlacelistformComponent
  },
  {
    path:'sites',
    canActivate:[AuthGuard],
    component:SitesComponent
  },
  {
  path:'siteAdd/:id',
  canActivate:[AuthGuard],
  component:SitesFormComponent
  },
  
    {
      path:'siteAdd',
      canActivate:[AuthGuard],
      component:SitesFormComponent
      },
      {
        path:'values',
        canActivate:[AuthGuard],
        component:ValuesComponent
        }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
