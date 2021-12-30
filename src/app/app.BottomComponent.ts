import { Component, Input } from '@angular/core';
import BottomExplanitionData from './BottomExplanition.json';
@Component({
  selector: 'BottomComponent',
  templateUrl: '/app.BottomComponent.html',
})
export class BottomComponent {
  bottomExplanation = BottomExplanitionData;
  ngOnInit() {}
}
