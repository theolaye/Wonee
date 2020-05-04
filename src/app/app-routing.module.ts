import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppartementComponent } from './appartement/appartement.component';
import { SuggestionComponent} from './suggestion/suggestion.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ClientComponent} from './client/client.component';
import {ClientDetailComponent} from './client-detail/client-detail.component';
import {ClientStatComponent} from './client-stat/client-stat.component';
import {EditClientComponent} from './edit-client/edit-client.component';
import {AddClientComponent} from './add-client/add-client.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'add-client',
    component: AddClientComponent,
    data: { title: 'add client' } ,
  },



  {
    path: 'edit-client',
    component: EditClientComponent,
    data: { title: 'edit client' } ,
  },


  {
    path: 'client-stat',
    component: ClientStatComponent,
    data: { title: 'client stat' } ,
  },

  {
    path: 'client-detail',
    component: ClientDetailComponent,
    data: { title: 'detail client' } ,
  },


 
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path: 'appartement', component: AppartementComponent},


];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'appartements', component:AppartementComponent},
    {path: 'client', component: ClientComponent},
    {path: 'suggestion', component: SuggestionComponent},


  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ AppartementComponent, SuggestionComponent, HomeComponent, AboutComponent, ClientComponent]
