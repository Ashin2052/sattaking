import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
      }),
    ToastContainerModule,
    NgxPaginationModule
  ],
  providers: [ JwtHelperService],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
