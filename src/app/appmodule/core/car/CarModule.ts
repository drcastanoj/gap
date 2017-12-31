import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarService } from './CarService';
import { CarTableComponent } from './table/CarTableComponent';
import { CommonModule } from 'app/appmodule/common/CommonModule';
import { CardComparasionComponent } from './comparasion/CardCarComparasionComponent';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    CarTableComponent,
    CardComparasionComponent
  ],
  providers: [
    CarService
  ],
  exports: [
    CarTableComponent,
    CardComparasionComponent
  ]
})
export class CarModule { }