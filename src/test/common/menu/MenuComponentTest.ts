import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { MenuComponent } from 'app/appmodule/common/menu/MenuComponent';
import { CommonModule } from 'app/appmodule/common/CommonModule';

import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule
      ]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<MenuComponent> = TestBed.createComponent(MenuComponent);
    expect(fixture.componentInstance instanceof MenuComponent).toBe(true, 'should create MenuComponent');
  });
});

