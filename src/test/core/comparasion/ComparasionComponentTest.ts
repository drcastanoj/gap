import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { ComparisonComponent } from 'app/appmodule/core/comparison/ComparisonComponent';
import { AppModule } from 'app/appmodule/AppModule';
import { RouterTestingModule } from '@angular/router/testing';
import { cars } from 'app/appmodule/core/car/CarModels';

describe('ComparisonComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<ComparisonComponent> = TestBed.createComponent(ComparisonComponent);
    expect(fixture.componentInstance instanceof ComparisonComponent).toBe(true, 'should create ComparisonComponent');
  });

  it('Init values, load cars', () => {
    const fixture: ComponentFixture<ComparisonComponent> = TestBed.createComponent(ComparisonComponent);
    const component: any = fixture.componentInstance;
    spyOn(component.carService, 'getCars').and.callThrough();
    component.ngOnInit();
    expect(component.carService.getCars).toHaveBeenCalledTimes(1);
    expect(component.cars).toBe(cars);
  });

});