import { Component, Input } from '@angular/core';
import { ICarSelected, ICar } from '../CarModels';
/**
 * Component  card comparasion, add car and selected for compare
 */
@Component({
  selector: 'card-car-comparasion',
  templateUrl: './CardCarComparasionComponent.html',
  styleUrls: ['./CardCarComparasionComponent.scss']
})
export class CardComparasionComponent {
  /**  map of cars */
  @Input() public cars: ICar;
  /** car selected */
  private carSelected: ICarSelected;
  /** show input for selected a car */
  private showInputs: boolean;
  /** filters of the inputs */
  private filterCars: { brand?: string; model?: string; year?: number } = {};
  constructor() { }

  /** show input for add a car*/
  protected addCar(): void {
    this.showInputs = true;
  }

  /**
   * event  of brand selected 
   * @param brand 
   */
  protected selectedBrand(brand: string): void {
    this.filterCars.brand = brand;
    delete this.filterCars.model;
    delete this.filterCars.year;

  }

  /**
   * event  of model selected 
   * @param model 
   */
  protected selectedModel(model: string): void {
    this.filterCars.model = model;
    delete this.filterCars.year;
  }

  /**
   * event  of year selected 
   * @param year 
   */
  protected selectedYear(year: number): void {
    this.filterCars.year = year;
    this.carSelected = {
      brand: this.cars[this.filterCars.brand].name,
      model: this.cars[this.filterCars.brand].models[this.filterCars.model].name,
      year: year,
      price: this.cars[this.filterCars.brand].models[this.filterCars.model].years[year].price,
      photo: this.cars[this.filterCars.brand].models[this.filterCars.model].years[year].photo
    };
  }

  /**
   * change a  car 
   */
  protected carChange(): void {
    this.filterCars = {};
    this.carSelected = undefined;
  }

  /**
   * delete a car selected
   */
  protected carDelete(): void {
    this.showInputs = false;
    this.carChange();
  }
}