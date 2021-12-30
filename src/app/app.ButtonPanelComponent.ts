import { Component } from '@angular/core';
import SideButtons from './SideButtons.json';
@Component({
  selector: 'ButtonPanelComponent',
  templateUrl: '/app.ButtonPanelComponent.html',
})
export class ButtonPanelComponent {
  panelData = SideButtons;
}
