import { Component } from '@angular/core';
import TopClassData from './TopClass.json';
@Component({
  selector: 'TopComponent',
  templateUrl: '/app.TopComponent.html',
})
export class TopComponent {
  topClass = TopClassData;
}
