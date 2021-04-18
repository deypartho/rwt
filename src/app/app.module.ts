import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { FrontPageComponent } from './component/front-page/front-page.component';
import { HomebannerComponent } from './component/homebanner/homebanner.component';
import { HomeComponent } from './component/home/home.component';
import { OurstoryComponent } from './component/ourstory/ourstory.component';
import { OuroutletsComponent } from './component/ouroutlets/ouroutlets.component';
import { OurmenuComponent } from './component/ourmenu/ourmenu.component';
import { InhouseeventsComponent } from './component/inhouseevents/inhouseevents.component';
import { ContactComponent } from './component/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    FrontPageComponent,
    HomebannerComponent,
    HomeComponent,
    OurstoryComponent,
    OuroutletsComponent,
    OurmenuComponent,
    InhouseeventsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
