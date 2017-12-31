import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * component dropdown 
 */
@Component({
  selector: 'car-dropdown',
  templateUrl: './DropdownComponent.html',
  styleUrls: ['./DropdownComponent.scss']
})
export class DropdownComponent {

  /** input  data for selected  */
  @Input() public data: { [key: string]: { name: string } };
  /** message in dropdown button  */
  @Input() public title: string;
  /**event for selected value */
  @Output() public valueSelected: EventEmitter<string> = new EventEmitter();
  /** key selected  */
  private value: { key: string; value: string };
  /** show or hide options */
  private showDropdown: boolean;
  constructor() {

  }
  /** open or close dropdown */
  protected openDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  /** event dipacht when selected a option */
  protected optionSelected(key: string): void {
    this.showDropdown = false;
    this.value = { key: key, value: this.data[key].name || key };
    this.valueSelected.emit(key);
  }
}