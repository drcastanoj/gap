import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { DropdownComponent } from 'app/appmodule/common/dropdown/DropdownComponent';
import { CommonModule } from 'app/appmodule/common/CommonModule';
import { RouterTestingModule } from '@angular/router/testing';
import { cars } from 'app/appmodule/core/car/CarModels';

describe('DropdownComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule
      ]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<DropdownComponent> = TestBed.createComponent(DropdownComponent);
    expect(fixture.componentInstance instanceof DropdownComponent).toBe(true, 'should create DropdownComponent');
  });

  it('Open dropdown', () => {
    const fixture: ComponentFixture<DropdownComponent> = TestBed.createComponent(DropdownComponent);
    const componet: any = fixture.componentInstance;
    componet.openDropdown();
    expect(componet.showDropdown).toBe(true);
  });

  it('Open dropdown', () => {
    const fixture: ComponentFixture<DropdownComponent> = TestBed.createComponent(DropdownComponent);
    const componet: any = fixture.componentInstance;
    componet.data = cars;
    componet.showDropdown = true;
    spyOn(componet.valueSelected, 'emit').and.callThrough();
    componet.optionSelected('bmx');
    expect(componet.showDropdown).toBe(false);
    expect(componet.value.key).toBe('bmx');
    expect(componet.value.value).toBe('BMW');
    expect(componet.valueSelected.emit).toHaveBeenCalledTimes(1);
    expect(componet.valueSelected.emit).toHaveBeenCalledWith('bmx');
  });
});