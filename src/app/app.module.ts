import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CloudComponent } from './component/cloud/cloud.component';

import { Route } from '@angular/compiler/src/core';
import { SlidesComponent } from './component/slides/slides.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';


const appRoutes : Routes = [
  { path: '' , component:DashboardComponent},
  { path: 'cloud' , component:CloudComponent},
  { path:'contact' , component:ContactComponent }

];  
  


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CloudComponent,
    SlidesComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
