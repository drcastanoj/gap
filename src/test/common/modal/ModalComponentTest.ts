import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { ModalComponent } from 'app/appmodule/common/modal/ModalComponent';
import { CommonModule } from 'app/appmodule/common/CommonModule';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModalComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule
      ]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<ModalComponent> = TestBed.createComponent(ModalComponent);
    expect(fixture.componentInstance instanceof ModalComponent).toBe(true, 'should create ModalComponent');
  });

  it('open modal ', () => {
    const fixture: ComponentFixture<ModalComponent> = TestBed.createComponent(ModalComponent);
    const component: any = fixture.componentInstance;
    component.show();
    expect(component.visible).toBe(true);
  });

  it('close modal', () => {
    const fixture: ComponentFixture<ModalComponent> = TestBed.createComponent(ModalComponent);
    const component: any = fixture.componentInstance;
    component.hide();
    expect(component.visible).toBe(false);
  });
});
