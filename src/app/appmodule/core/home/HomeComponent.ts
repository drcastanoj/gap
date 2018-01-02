import { Component, OnInit, ViewChild } from '@angular/core';
import { CarService } from '../car/CarService';
import { ICar, ICarSelected } from '../car/CarModels';

/**
 * Main view with card list
 */
@Component({
  selector: 'car-home',
  templateUrl: './HomeComponent.html',
  styleUrls: ['./HomeComponent.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('modalCarDetail') public modalCarDetail: { show: Function };
  /** map with cars */
  protected cars: ICar;
  /** brand selected for user */
  protected brand: string;
  /** Car selected  */
  protected carDetail: ICarSelected = {};
  constructor(
    private carService: CarService) { }

  public ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  /** event for selected a  car brand  */
  protected brandSelected(brand: string): void {
    this.brand = brand;
  }

  /** open modal and show a  car
   * @param carSelected 
   */
  protected carSelected(carSelected: ICarSelected): void {
    this.carDetail = carSelected;
    this.modalCarDetail.show();
  }
}