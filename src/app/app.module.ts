import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FacebookModule } from 'ngx-facebook';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './service/messaging.service';
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
import { ValuesfromComponent } from './valuesfrom/valuesfrom.component';
import { CalenderComponent } from './calender/calender/calender.component';
import { FooterComponent } from './footer/footer.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { PlaceModelComponent } from './place-model/place-model.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ParagraphFormComponent } from './paragraph-form/paragraph-form.component';
import { ColorDDirective } from './main-page/color-d.directive';
import { ColorModifyPipe } from './color-modify.pipe';
import { environment } from 'src/environments/environment';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [

    AppComponent,
    CalenderComponent,
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
    ValuesfromComponent,
    FooterComponent,
    DatepickerComponent,
    TableComponentComponent,
    PlaceModelComponent,
    ParagraphComponent,
    ParagraphFormComponent,
    ColorDDirective,
    ColorModifyPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,MomentModule,
    FacebookModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebasevar),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    HttpClientModule,
    NgbModule,
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
  providers: [ JwtHelperService,AuthService,MessagingService,AsyncPipe,
    AuthGuardService,],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
