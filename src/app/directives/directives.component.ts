import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  show = true;
  title = 'Angular15';
  myColor = 'blue';
  fontSize = 24;
  increaseSize() {
    this.fontSize = this.fontSize + 1;
  }

  changeClass() {
    this.show = false;
  }


}
