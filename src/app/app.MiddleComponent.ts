import { Component, Input } from '@angular/core';
import classesData from './classes.json';
@Component({
  selector: 'MiddleComponent',
  templateUrl: '/app.MiddleComponent.html',
})
export class MiddleComponent {
  classes = classesData;
}
