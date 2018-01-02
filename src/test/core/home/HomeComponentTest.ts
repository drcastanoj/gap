import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { HomeComponent } from 'app/appmodule/core/home/HomeComponent';
import { AppModule } from 'app/appmodule/AppModule';
import { RouterTestingModule } from '@angular/router/testing';
import { cars } from 'app/appmodule/core/car/CarModels';


describe('HomeComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        AppModule
      ]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<HomeComponent> = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
  });

  it('Init values, load cars', () => {
    const fixture: ComponentFixture<HomeComponent> = TestBed.createComponent(HomeComponent);
    const component: any = fixture.componentInstance;
    spyOn(component.carService, 'getCars').and.callThrough();
    component.ngOnInit();
    expect(component.carService.getCars).toHaveBeenCalledTimes(1);
    expect(component.cars).toBe(cars);
  });


  it('Set brand selected', () => {
    const fixture: ComponentFixture<HomeComponent> = TestBed.createComponent(HomeComponent);
    const component: any = fixture.componentInstance;
    component.brandSelected('brand');
    expect(component.brand).toBe('brand');
  });

  it('router navigate with params', () => {
    const fixture: ComponentFixture<HomeComponent> = TestBed.createComponent(HomeComponent);
    const component: any = fixture.componentInstance;
    const mockObj: any = { test: '' };
    component.modalCarDetail = { show: () => { } };
    spyOn(component.modalCarDetail, 'show').and.callThrough();
    component.carSelected(mockObj);
    expect(component.carDetail).toBe(mockObj);
    expect(component.modalCarDetail.show).toHaveBeenCalledTimes(1);

  });
});
