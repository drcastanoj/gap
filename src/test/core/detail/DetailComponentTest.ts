import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { DetailComponent } from 'app/appmodule/core/detail/DetailComponent';
import { AppModule } from 'app/appmodule/AppModule';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
describe('DetailComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<DetailComponent> = TestBed.createComponent(DetailComponent);
    expect(fixture.componentInstance instanceof DetailComponent).toBe(true, 'should create DetailComponent');
  });

  it('Init values, load cars', () => {
    const fixture: ComponentFixture<DetailComponent> = TestBed.createComponent(DetailComponent);
    const component: any = fixture.componentInstance;
    const mockCar: any = { test: 'test' };
    component.route.queryParams = Observable.of(mockCar);
    component.ngOnInit();
    expect(component.car).toBe(mockCar);
  });

});
