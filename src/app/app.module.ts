import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'ngx-moment';

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './admin/admin.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlacelistformComponent } from './placelistform/placelistform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth.guard';
import { SitesComponent } from './sites/sites.component';
import { SitesFormComponent } from './sites-form/sites-form.component';
import { ValuesComponent } from './values/values.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HeaderComponent,
    LoginComponent,
    MainPageComponent,
    AdminComponent,
    PlaceListComponent,
    PlacelistformComponent,
    NavbarComponent,
    SitesComponent,
    SitesFormComponent,
    ValuesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,MomentModule,

    HttpClientModule,
    FormsModule,
    AppRoutingModule,BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
      }),
    ToastContainerModule,
    NgxPaginationModule
  ],
  providers: [ JwtHelperService,AuthService,
    AuthGuardService,],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
