import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICarSelected } from '../CarModels';
/**
 * Component  Table, for showing the models
 */
@Component({
  selector: 'car-table',
  templateUrl: './CarTableComponent.html',
  styleUrls: ['./CarTableComponent.scss']
})
export class CarTableComponent {
  /** map with cars  */
  @Input() public data: { name: string, models: object };
  /** event whent the user selected a car */
  @Output() public carSelected: EventEmitter<ICarSelected> = new EventEmitter();
  constructor() { }

  /**
   * event when selected car
   * @param model  
   * @param year
   */
  protected rowSelected(model: string, year: number): void {
    this.carSelected.emit({
      brand: this.data.name,
      model: this.data.models[model].name,
      photo: this.data.models[model].years[year].photo,
      price: this.data.models[model].years[year].price,
      year: year
    });
  }


}