import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { InhouseeventsComponent } from './component/inhouseevents/inhouseevents.component';
import { OurmenuComponent } from './component/ourmenu/ourmenu.component';
import { OuroutletsComponent } from './component/ouroutlets/ouroutlets.component';
import { OurstoryComponent } from './component/ourstory/ourstory.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'our-story', component: OurstoryComponent
  },
  {
    path:'our-outlets', component: OuroutletsComponent
  },
  {
    path:'our-menu', component: OurmenuComponent
  },
  {
    path:'in-house-events', component: InhouseeventsComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
