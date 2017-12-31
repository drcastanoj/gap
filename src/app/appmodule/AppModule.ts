import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './AppComponent';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CoreModule } from './core/CoreModule';
import { CommonModule } from './common/CommonModule';
/** Definición de rutas generales */
const routes: Routes = [
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    CommonModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy } // manejo de rutas con '#' en la url
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
