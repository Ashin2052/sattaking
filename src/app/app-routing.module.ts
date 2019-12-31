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
const routes: Routes = [
  {
    path:'',
    component:MainPageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  // {
  //   path:'admin',
  //   canActivate:[AuthGuard],
  //   component:AdminComponent
  // },
  {
    path:'admin',
    component:PlaceListComponent
  },
  {
    path:'placeadd',
    component:PlacelistformComponent
  },
  {
    path:'placeadd/:id',
    component:PlacelistformComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
