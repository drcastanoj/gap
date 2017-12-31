import { Component, OnInit } from '@angular/core';
import { CarService } from '../car/CarService';
import { ICar, ICarSelected } from '../car/CarModels';
import { Router } from '@angular/router';

/**
 * Main view with card list
 */
@Component({
  selector: 'car-home',
  templateUrl: './HomeComponent.html',
  styleUrls: ['./HomeComponent.scss']
})
export class HomeComponent implements OnInit {

  /** map with cars */
  protected cars: ICar;
  /** brand selected for user */
  protected brand: string;
  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  /** event for selected a  car brand  */
  protected brandSelected(brand: string): void {
    this.brand = brand;
  }

  protected carSelected(carSelected: ICarSelected): void {
    this.router.navigate(['detail'], { queryParams: carSelected });
  }
}