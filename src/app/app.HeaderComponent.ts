import { Component } from '@angular/core';

@Component({
  selector: 'HeaderComponent',
  templateUrl: '/app.HeaderComponent.html',
})
export class HeaderComponent {
  public showLocation() {
    console.log('Button Clicked');
  }
}
