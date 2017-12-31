import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { CarTableComponent } from 'app/appmodule/core/car/table/CarTableComponent';
import { AppModule } from 'app/appmodule/AppModule';
import { RouterTestingModule } from '@angular/router/testing';
import { cars } from 'app/appmodule/core/car/CarModels';

describe('CarTableComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<CarTableComponent> = TestBed.createComponent(CarTableComponent);
    expect(fixture.componentInstance instanceof CarTableComponent).toBe(true, 'should create CarTableComponent');
  });

  it('Init values, load cars', () => {
    const fixture: ComponentFixture<CarTableComponent> = TestBed.createComponent(CarTableComponent);
    const component: any = fixture.componentInstance;
    component.data = cars.bmx;
    spyOn(component.carSelected, 'emit').and.callThrough();
    component.rowSelected('ilx', 2013);
    expect(component.carSelected.emit).toHaveBeenCalledTimes(1);
    expect(component.carSelected.emit).toHaveBeenCalledWith({
      brand: 'BMW',
      model: 'ILX',
      year: 2013,
      price: 20000,
      photo: 'bmw1.jpg'
    });
  });

});