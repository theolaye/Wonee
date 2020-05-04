import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon'
import { MatSliderModule } from '@angular/material/slider';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {RatingModule} from 'primeng/rating';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {GalleriaModule} from 'primeng/galleria';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';




import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';



import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ClientStatComponent } from './client-stat/client-stat.component';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SuggestionComponent,
    AboutComponent,
    HomeComponent,
    ClientComponent,
    ClientDetailComponent,
    AddClientComponent,
    EditClientComponent,
    ClientStatComponent,
    CarouselPauseComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatIconModule,
    MatSliderModule,
    AccordionModule,
    PanelModule,
    GalleriaModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    ChartsModule,
  
  ],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
