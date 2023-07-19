import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appChangeBg]',
})
export class ChangeBgDirective {

  @Input()
  isCorrect: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') answer() {
    // if ans is correct - bg color green
    if (this.isCorrect) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'green');
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#fff');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid grey');
    } else {
      // if ans is wrong - bg color red
      this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'red');
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#fff');
      this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid grey');
    }
  }
}