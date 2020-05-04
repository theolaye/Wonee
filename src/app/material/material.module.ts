import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import {Component} from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import { from } from 'rxjs';
const MaterialComponents= [
  MatButtonModule,
  MatBadgeModule,
  MatMenuModule,
  MatExpansionModule,
  MatStepperModule,
  MatFormFieldModule,
MatInputModule,
MatCheckboxModule,
MatDatepickerModule,
MatNativeDateModule
];



@NgModule({
  
  imports: [MaterialComponents,
    
  
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
