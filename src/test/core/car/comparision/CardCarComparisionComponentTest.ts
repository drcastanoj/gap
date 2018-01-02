import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CardComparasionComponent } from 'app/appmodule/core/car/comparasion/CardCarComparasionComponent';
import { AppModule } from 'app/appmodule/AppModule';
import { RouterTestingModule } from '@angular/router/testing';
import { cars } from 'app/appmodule/core/car/CarModels';
import { } from 'jasmine';

describe('CardComparasionComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<CardComparasionComponent> = TestBed.createComponent(CardComparasionComponent);
    expect(fixture.componentInstance instanceof CardComparasionComponent).toBe(true, 'should create CardCarComparasionComponent');
  });

  it('Show inputs ', () => {
    const fixture: ComponentFixture<CardComparasionComponent> = TestBed.createComponent(CardComparasionComponent);
    const component: any = fixture.componentInstance;
    component.cars = cars;
    component.addCar();
    expect(component.showInputs).toBe(true);
  });

  it('Selected brand  ', () => {
    const fixture: ComponentFixture<CardComparasionComponent> = TestBed.createComponent(CardComparasionComponent);
    const component: any = fixture.componentInstance;
    component.cars = cars;
    component.filterCars = { model: 'model', year: 2016 };
    component.selectedBrand('brand');
    expect(component.filterCars.brand).toBe('brand');
    expect(component.filterCars.model).toBeUndefined();
    expect(component.filterCars.year).toBeUndefined();

  });


  it('Selected model ', () => {
    const fixture: ComponentFixture<CardComparasionComponent> = TestBed.createComponent(CardComparasionComponent);
    const component: any = fixture.componentInstance;
    component.cars = cars;
    component.filterCars = { year: 2016 };
    component.selectedModel('model');
    expect(component.filterCars.model).toBe('model');
    expect(component.filterCars.year).toBeUndefined();
  });

  it('Selected year ', () => {
    const fixture: ComponentFixture<CardComparasionComponent> = TestBed.createComponent(CardComparasionComponent);
    const component: any = fixture.componentInstance;
    component.cars = cars;
    component.filterCars = { brand: 'bmx', model: 'mdx' };
    component.selectedYear(2011);
    expect(component.filterCars.year).toBe(2011);
    expect(component.carSelected.brand).toBe('BMW');
    expect(component.carSelected.model).toBe('MDX');

    expect(component.carSelected.price).toBe(20000);

    expect(component.carSelected.photo).toBe('bmw2.jpg');
    expect(component.carSelected.year).toBe(2011);
  });

  it('Action delete car ', () => {
    const fixture: ComponentFixture<CardComparasionComponent> = TestBed.createComponent(CardComparasionComponent);
    const component: any = fixture.componentInstance;
    component.cars = cars;
    component.filterCars = { brand: 'bmx', model: 'mdx' };
    component.deleteCar();
    expect(Object.keys(component.filterCars).length).toBe(0);
    expect(component.showInputs).toBe(false);
    expect(component.carSelected).toBeUndefined();
  });


  it('Action change car ', () => {
    const fixture: ComponentFixture<CardComparasionComponent> = TestBed.createComponent(CardComparasionComponent);
    const component: any = fixture.componentInstance;
    component.cars = cars;
    component.showInputs = true;

    component.filterCars = { brand: 'bmx', model: 'mdx' };
    component.changeCar();
    expect(Object.keys(component.filterCars).length).toBe(0);
    expect(component.showInputs).toBe(true);
  });

});