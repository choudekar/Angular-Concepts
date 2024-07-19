import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bgColor = 'tomato';

  constructor(private eleRef: ElementRef) {
    //this.eleRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('click') clickevent() {
    this.bgColor = this.bgColor == 'yellow' ? 'tomato' : 'yellow';
  }

}
