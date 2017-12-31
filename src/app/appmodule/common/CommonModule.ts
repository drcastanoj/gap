import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu/MenuComponent';
import { RouterModule } from '@angular/router';
import { KeysPipe } from './pipe/KeysPipe';
import { DropdownComponent } from './dropdown/DropdownComponent';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    KeysPipe,
    DropdownComponent
  ],
  exports: [
    MenuComponent,
    KeysPipe,
    DropdownComponent
  ],
  providers: [
  ]
})
export class CommonModule { }