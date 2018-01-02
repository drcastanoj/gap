import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu/MenuComponent';
import { RouterModule } from '@angular/router';
import { KeysPipe } from './pipe/KeysPipe';
import { DropdownComponent } from './dropdown/DropdownComponent';
import { ModalComponent } from './modal/ModalComponent';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    MenuComponent,
    KeysPipe,
    DropdownComponent,
    ModalComponent
  ],
  exports: [
    MenuComponent,
    KeysPipe,
    DropdownComponent,
    ModalComponent
  ],
  providers: [
  ]
})
export class CommonModule { }