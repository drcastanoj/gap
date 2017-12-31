import { Injectable } from '@angular/core';
import { ICar, cars } from './CarModels';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

/**
 * Service for Cars
 */
@Injectable()
export class CarService {

  /**
   * mock of cars 
   * @return map with cars
   */
  public getCars(): Observable<ICar> {
    return Observable.of(cars);
  }
}