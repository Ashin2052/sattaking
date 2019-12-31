import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './admin/admin.component';



import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlacelistformComponent } from './placelistform/placelistform.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ JwtHelperService],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
