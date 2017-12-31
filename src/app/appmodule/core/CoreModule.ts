import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { routes } from './AppRoutes';
import { HomeComponent } from './home/HomeComponent';
import { ComparisonComponent } from './comparison/ComparisonComponent';
import { CommonModule } from '../common/CommonModule';
import { DetailComponent } from './detail/DetailComponent';
import { CarModule } from './car/CarModule';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    CarModule
  ],
  declarations: [
    HomeComponent,
    ComparisonComponent,
    DetailComponent
  ],
  providers: [
  ]
})
export class CoreModule { }
