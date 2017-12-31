import { Component, OnInit } from '@angular/core';
import { CarService } from '../car/CarService';
import { ICar } from '../car/CarModels';

/**
 * Comparasion view
 */
@Component({
  selector: 'car-comparison',
  templateUrl: './ComparisonComponent.html',
  styleUrls: ['./ComparisonComponent.scss']
})
export class ComparisonComponent implements OnInit {

  /** map with cars  */
  private cars: ICar;
  constructor(
    private carService: CarService
  ) {

  }
  public ngOnInit(): void {
    this.carService.getCars().subscribe((cars => {
      this.cars = cars;
    }));
  }

}