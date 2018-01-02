import { Component } from '@angular/core';

/** Modal component  */
@Component({
  selector: 'car-modal',
  templateUrl: 'ModalComponent.html',
  styleUrls: ['ModalComponent.scss']
})
export class ModalComponent {

  /** show  modal */
  public visible: boolean = false;
  /** angular animation */
  private visibleAnimate: boolean = false;

  constructor() { }

  /** show modal */
  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  /** close modal  */
  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  /** close  modal  */
  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

}