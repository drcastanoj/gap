import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICarSelected } from '../car/CarModels';
/**
 * Car detail view 
 */
@Component({
  selector: 'car-detail',
  templateUrl: './DetailComponent.html',
  styleUrls: ['DetailComponent.scss']
})
export class DetailComponent implements OnInit {
  /** car set for view */
  private car: ICarSelected;
  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route
      .queryParams
      .subscribe((params: ICarSelected) => {
        this.car = params;
      });
  }
}