import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { AppComponent } from '../../src/app/appmodule/AppComponent';
import { CommonModule } from '../../src/app/appmodule/common/CommonModule';

import { RouterTestingModule } from '@angular/router/testing';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule
      ],
      declarations: [AppComponent]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});


