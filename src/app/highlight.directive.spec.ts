import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

// describe('HighlightDirective', () => {
//   it('should create an instance', () => {
//     const directive = new HighlightDirective();
//     expect(directive).toBeTruthy();
//   });
// });

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const eleRef = new ElementRef(null);
    const directive = new HighlightDirective(eleRef);
  });
});